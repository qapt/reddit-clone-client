import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PostHeader from '../Post/PostHeader';

const PostListItemData = ({ post }: any) => {
    return (
        <Box pl={2} pt={2}>
            <PostHeader
                subredditName={post.subreddit.name}
                username={post.user.username}
            />

            <Link to={`/comments/${post.id}`}>
                <Heading fontSize='xl'>{post.title}</Heading>
            </Link>

            <Flex align='center'>
                <Text flex={1} mt={4}>
                    {post.content}
                </Text>
            </Flex>
        </Box>
    );
};

export default PostListItemData;
