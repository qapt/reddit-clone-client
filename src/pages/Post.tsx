import {
    Box,
    Container,
    useColorModeValue,
    Text,
    Flex,
    Input,
    Heading,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { usePostById } from '../api/posts';
import CenterLoadingSpinner from '../components/Layout/CenterLoadingSpinner';

import FlexWrapper from '../components/Layout/FlexWrapper';
import VoteSection from '../components/Votes/VoteSection';
import PostHeader from '../components/Post/PostHeader';
import ActionButtons from '../components/PostsList/ActionButtons';

const Post = () => {
    const { postId } = useParams<any>();
    const { data: { post } = {}, isLoading } = usePostById(postId);

    return (
        <Box
            background={useColorModeValue('gray.200', 'black')}
            minH='100vh'
            p={6}
        >
            {isLoading ? (
                <CenterLoadingSpinner />
            ) : (
                <Container maxW='5xl'>
                    <FlexWrapper>
                        <Box>
                            <VoteSection postId={post.id} />
                        </Box>
                        <Flex direction='column' mx={2} my={2} w='100%'>
                            <PostHeader
                                subredditName={post.subreddit.name}
                                username={post.user.username}
                            />
                            <Heading mb={4}>{post.title}</Heading>
                            <Box>
                                {post.tags.map((tag: string) => (
                                    <Text key={tag}>{tag}</Text>
                                ))}
                            </Box>
                            <Text>{post.content}</Text>
                            <ActionButtons postId={postId} />
                            <Input w='85%' my={6} />
                            <Text>Comment 1 </Text>
                            <Text>Comment 1 </Text>
                            <Text>Comment 1 </Text>
                            <Text>Comment 1 </Text>
                            <Text>Comment 1 </Text>
                        </Flex>
                    </FlexWrapper>
                </Container>
            )}
        </Box>
    );
};

export default Post;
