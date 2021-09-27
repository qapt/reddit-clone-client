import {
    Box,
    useColorModeValue,
    Container,
    Grid,
    GridItem,
    Heading,
    Flex,
    Kbd,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/react';
import CreatePostSidebar from '../components/CreatePost/CreatePostSidebar';
import FlexWrapper from '../components/Layout/FlexWrapper';
import CreateTextPostForm from '../components/CreatePost/CreateTextPostForm';
import SubredditList from '../components/CreatePost/SubredditList';
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from '../api/auth';

const CreatePost = () => {
    const history = useHistory();
    const { data } = useCurrentUser();

    if (data && !data.isLoggedIn) {
        history.push('/accounts/login');
    }
    return (
        <Box background={useColorModeValue('gray.200', 'black')} pt={6}>
            <Container maxW='7xl'>
                <Grid templateColumns='repeat(20, 1fr)' gap={6}>
                    <GridItem colSpan={14}>
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                            py={4}
                            borderBottom={`1px solid ${useColorModeValue(
                                'white',
                                'gray'
                            )}`}
                        >
                            <Heading fontSize='larger'>Create a Post</Heading>
                            <Heading fontSize='md' color='#1382d5'>
                                DRAFTS <Kbd>0</Kbd>
                            </Heading>
                        </Flex>
                        <FlexWrapper w='35%' my={2}>
                            <SubredditList />
                        </FlexWrapper>

                        <FlexWrapper direction='column'>
                            <Box>
                                <Tabs isFitted color='gray'>
                                    <TabList>
                                        <Tab
                                            p={4}
                                            fontWeight='bold'
                                            _selected={{
                                                borderBottom:
                                                    '3px solid #0079d3',
                                                color: '#0079d3',
                                                bg: '#f2f8fd',
                                            }}
                                        >
                                            Post
                                        </Tab>
                                        <Tab
                                            p={4}
                                            fontWeight='bold'
                                            _selected={{
                                                borderBottom:
                                                    '3px solid #0079d3',
                                                color: '#0079d3',
                                                bg: '#f2f8fd',
                                            }}
                                        >
                                            Images & Video
                                        </Tab>
                                        <Tab p={4} isDisabled>
                                            Link
                                        </Tab>
                                        <Tab p={4} isDisabled>
                                            Poll
                                        </Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Box p={2}>
                                                <CreateTextPostForm />
                                            </Box>
                                        </TabPanel>
                                        <TabPanel>Coming soon...</TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Box>
                        </FlexWrapper>
                    </GridItem>
                    <GridItem colSpan={6}>
                        <CreatePostSidebar />
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default CreatePost;
