import { Box, useColorModeValue, Input, Avatar } from '@chakra-ui/react';
import { useParams, useHistory } from 'react-router-dom';
import AuthModalHandler from '../Auth/AuthModalHandler';
import FlexWrapper from '../Layout/FlexWrapper';

const CreatePostLink = () => {
    const history = useHistory();
    const { subredditName } = useParams<any>();
    const redirectToCreatePostPage = () => {
        history.push(subredditName ? `/r/${subredditName}/submit` : '/submit');
    };
    return (
        <FlexWrapper alignItems='center' px={4} py={3} mb={4}>
            <Box mr={4}>
                <Avatar size='sm' />
            </Box>

            <Box flex='1'>
                <AuthModalHandler action={redirectToCreatePostPage}>
                    <Input
                        placeholder='Create Post'
                        background={useColorModeValue('#f6f7f8', '#272729')}
                    />
                </AuthModalHandler>
            </Box>
        </FlexWrapper>
    );
};

export default CreatePostLink;
