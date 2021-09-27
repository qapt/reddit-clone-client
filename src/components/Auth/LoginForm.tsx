import { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    Spinner,
    Link,
    useToast,
} from '@chakra-ui/react';
import { useLoginUser } from '../../api/auth';

const LoginForm = ({ onClose, toggleModal }: any) => {
    const toast = useToast();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginUserMutation = useLoginUser();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const loginData = { username, password };
        loginUserMutation.mutate(loginData, {
            onSuccess: () => {
                toast({
                    title: 'Successfully logged in!',
                    duration: 1500,
                    isClosable: true,
                    variant: 'left-accent',
                    status: 'success',
                });
                onClose();
            },
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box p={8}>
                    <Stack spacing={4}>
                        <FormControl id='username' isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input
                                focusBorderColor='teal.400'
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id='password' isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input
                                focusBorderColor='teal.400'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        {loginUserMutation.isError && (
                            <Text color='red.400'>Invalid credentials</Text>
                        )}

                        <Stack spacing={10}>
                            <Stack direction='row' justify='space-between'>
                                <Checkbox>Remember me</Checkbox>
                                <Link onClick={toggleModal}>
                                    <Text color='blue.400'>
                                        Create new account
                                    </Text>
                                </Link>
                            </Stack>

                            <Button
                                type='submit'
                                bg={'teal.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'teal.500',
                                }}
                            >
                                {loginUserMutation.isLoading ? (
                                    <Spinner />
                                ) : (
                                    'Sign in'
                                )}
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </form>
        </>
    );
};

export default LoginForm;
