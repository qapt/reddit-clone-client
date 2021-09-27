import { Stack, Heading, Text, Box } from '@chakra-ui/react';
import FlexWrapper from '../Layout/FlexWrapper';

const InfoSection = () => {
    return (
        <div>
            <Stack spacing={6}>
                <FlexWrapper p={5} direction='column'>
                    <Heading fontSize='xl'>Info</Heading>
                    <Text mt={4}>Info Info</Text>
                </FlexWrapper>
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
        </div>
    );
};

export default InfoSection;
