import { Flex, Stack, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from '../../api/auth';
import LoginForm from '../../components/Auth/LoginForm';

const Login = () => {
    const history = useHistory();
    const { data, isError, isLoading }: any = useCurrentUser();

    if (!isLoading && !isError && data.isLoggedIn) {
        history.push('/');
    }
    return (
        <Flex minH='93vh' align='center' justify='center'>
            <Stack spacing={8} p={6} boxShadow='xl'>
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>

                <LoginForm />
            </Stack>
        </Flex>
    );
};

export default Login;
