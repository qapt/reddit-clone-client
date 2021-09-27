import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import FlexWrapper from '../Layout/FlexWrapper';
import ActionButtons from './ActionButtons';
import PostListItemData from './PostListItemData';
import VoteSection from '../Votes/VoteSection';

const PostListItem = ({ post }: any) => {
    return (
        <FlexWrapper>
            <Box background={useColorModeValue('#f8f9fa', '#161617')}>
                <VoteSection postId={post.id} />
            </Box>
            <Flex direction='column' pl={1} pr={6}>
                <PostListItemData post={post} />
                <ActionButtons postId={post.id} />
            </Flex>
        </FlexWrapper>
    );
};

export default PostListItem;
