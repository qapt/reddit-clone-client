import { Box, useColorModeValue } from '@chakra-ui/react';
import { useAllPosts } from '../api/posts';
import CenterLoadingSpinner from '../components/Layout/CenterLoadingSpinner';
import PostsListWrapper from '../components/PostsList/PostsListWrapper';

const Landing = () => {
    const { data, isLoading } = useAllPosts();

    return (
        <Box background={useColorModeValue('gray.200', 'black')} minH='93vh'>
            {isLoading ? (
                <CenterLoadingSpinner />
            ) : (
                <PostsListWrapper posts={data.posts} />
            )}
        </Box>
    );
};

export default Landing;
