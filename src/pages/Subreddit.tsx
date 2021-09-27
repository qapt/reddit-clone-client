import { Box, useColorModeValue } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useSubredditByName } from '../api/subreddits';

import SubredditHeader from '../components/Subreddit/SubredditHeader';
import { usePostsBySubreddit } from '../api/posts';
import PostsListWrapper from '../components/PostsList/PostsListWrapper';
import CenterLoadingSpinner from '../components/Layout/CenterLoadingSpinner';

const Subreddit = () => {
    const { subredditName } = useParams<any>();
    const { data: subreddit } = useSubredditByName(subredditName);
    const {
        data: postsData,
        isLoading,
        isError,
    } = usePostsBySubreddit(subredditName);

    const accentColor = subreddit && subreddit.color.split('.')[0];

    return (
        <Box background={useColorModeValue('gray.200', 'black')} minH='93vh'>
            <SubredditHeader
                subreddit={subreddit && subreddit}
                accentColor={accentColor}
            />
            {isLoading ? (
                <CenterLoadingSpinner />
            ) : isError ? (
                'error'
            ) : (
                <PostsListWrapper posts={postsData.posts} />
            )}
        </Box>
    );
};

export default Subreddit;
