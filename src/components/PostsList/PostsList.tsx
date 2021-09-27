import { Stack } from '@chakra-ui/react';
import PostListItem from './PostListItem';

const PostsList = ({ posts }: any) => {
    return (
        <div>
            <Stack spacing={2}>
                {posts.map((post: any) => (
                    <div key={post.id}>
                        <PostListItem post={post} />
                    </div>
                ))}
            </Stack>
        </div>
    );
};

export default PostsList;
