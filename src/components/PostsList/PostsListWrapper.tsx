import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import SortingMethodSelector from '../SortingMethodSelector';
import CreatePostLink from '../Subreddit/CreatePostLink';
import InfoSection from '../Subreddit/InfoSection';
import PostsList from './PostsList';

const PostsListWrapper = ({ posts }: any) => {
    return (
        <Box pt={6}>
            <Container maxW='7xl'>
                <Grid
                    templateColumns={{
                        lg: 'repeat(20, 1fr)',
                        md: 'repeat(13, 1fr)',
                    }}
                    gap={6}
                >
                    <GridItem colSpan={13}>
                        <CreatePostLink />
                        <SortingMethodSelector />
                        <PostsList posts={posts} />
                    </GridItem>
                    <GridItem colSpan={7}>
                        <InfoSection />
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default PostsListWrapper;
