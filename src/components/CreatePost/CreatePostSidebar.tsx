import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FlexWrapper from '../Layout/FlexWrapper';

const CreatePostSidebar = () => {
    const { subredditName } = useParams<any>();
    return (
        <Stack spacing={6}>
            <FlexWrapper p={5} direction='column'>
                <Heading fontSize='xl'>r/{subredditName}</Heading>
                <Text mt={4}>
                    You are creating a post to the {subredditName} subreddit,
                    remember to follow the rules
                </Text>
                <Text mt={4}>999 Members</Text>
                <Text mt={4}>77 Online</Text>
                <Text mt={4}>Created Jan 25, 2008</Text>
            </FlexWrapper>
            <FlexWrapper p={5} direction='column'>
                <Heading fontSize='xl'>Posting to Reddit</Heading>
                <Text mt={4}>1. Remember the human</Text>
                <Text mt={4}>2. Behave like you would in real life</Text>
                <Text mt={4}>3. Look for the original source of content</Text>
                <Text mt={4}>4. Search for duplicates before posting</Text>
                <Text mt={4}>5. Read the community’s rules</Text>
            </FlexWrapper>
            <Text fontSize='xs'>
                Please be mindful of reddit's content policy and practice good
                reddiquette.
            </Text>
            <FlexWrapper p={5} justifyContent='space-between'>
                <Box fontSize='sm'>
                    <Text>Help</Text>
                    <Text>Reddit App</Text>
                    <Text>Reddit Coins</Text>
                    <Text>Reddit Premium</Text>
                    <Text>Reddit Gifts</Text>
                </Box>

                <Box mr={16} fontSize='sm'>
                    <Text>About</Text>
                    <Text>Careers</Text>
                    <Text>Press</Text>
                    <Text>Advertise</Text>
                    <Text>Blog</Text>
                    <Text>Terms</Text>
                    <Text>Content Policy</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Mod Policy</Text>
                </Box>
            </FlexWrapper>
        </Stack>
    );
};

export default CreatePostSidebar;
