import { Flex, Stack, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from '../../api/auth';
import RegisterForm from '../../components/Auth/RegisterForm';

const Register = () => {
    const history = useHistory();
    const { data, isError, isLoading }: any = useCurrentUser();

    if (!isLoading && !isError && data.isLoggedIn) {
        history.push('/');
    }
    return (
        <Flex minH='93vh' align='center' justify='center'>
            <Stack spacing={8}>
                <Heading fontSize={'4xl'}>Create a new account</Heading>
                <RegisterForm />
            </Stack>
        </Flex>
    );
};

export default Register;
