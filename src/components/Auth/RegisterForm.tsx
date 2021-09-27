import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    Text,
    FormHelperText,
    Spinner,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRegisterUser } from '../../api/auth';

const RegisterForm = ({ onClose, toggleModal }: any) => {
    const toast = useToast();
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const registerUserMutation = useRegisterUser();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newUser = { name, username, email, password };
        registerUserMutation.mutate(newUser, {
            onSuccess: () => {
                toast({
                    title: `Successfully signed up!`,
                    duration: 2000,
                    isClosable: true,
                    variant: 'left-accent',
                    status: 'success',
                });
                onClose();
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box p={8}>
                <Stack spacing={4}>
                    <FormControl id='name' isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            focusBorderColor='teal.400'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id='username' isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input
                            focusBorderColor='teal.400'
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <FormHelperText>
                            This will be how other people see you
                        </FormHelperText>
                    </FormControl>
                    <FormControl id='email' isRequired>
                        <FormLabel>Email</FormLabel>

                        <Input
                            focusBorderColor='teal.400'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormHelperText>
                            Your email will always be private
                        </FormHelperText>
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
                    {registerUserMutation.isError && (
                        <Text color='red.400'>
                            Something went wrong. Please try again.
                        </Text>
                    )}

                    <Stack spacing={8}>
                        <Box>
                            <Link onClick={toggleModal}>
                                <Text color={'blue.400'}>
                                    Already have an account? Log In
                                </Text>
                            </Link>
                        </Box>

                        <Button
                            type='submit'
                            bg={'teal.400'}
                            color={'white'}
                            _hover={{
                                bg: 'teal.500',
                            }}
                        >
                            {registerUserMutation.isLoading ? (
                                <Spinner />
                            ) : (
                                'Sign up'
                            )}
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </form>
    );
};

export default RegisterForm;
