import { Link } from 'react-router-dom';

import { Box, Text } from '@chakra-ui/react';
import { FaReddit } from 'react-icons/fa';
import { useCurrentUser, useLogoutUser } from '../../api/auth';
import SubredditSelector from './SubredditSelector';
import SearchForm from './SearchForm';
import PrivateButtons from './PrivateButtons';
import PublicButtons from './PublicButtons';

const Navbar = () => {
    const { data }: any = useCurrentUser();
    const useLogoutMutation = useLogoutUser();

    const handleLogout = async () => {
        useLogoutMutation.mutate();
    };

    return (
        <Box px={4} py={2}>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                <Box display='flex' ml={3} alignItems='center'>
                    <Link to='/'>
                        <FaReddit fontSize='40px' color='rgb(255, 69, 0)' />
                    </Link>
                    <Text fontWeight='bold' ml={2} fontSize='3xl'>
                        reddit
                    </Text>
                </Box>

                {data && data.isLoggedIn && <SubredditSelector />}
                <Box w={data && data.isLoggedIn ? '30em' : '50em'}>
                    <SearchForm />
                </Box>

                <Box display='flex'>
                    {data && data.isLoggedIn ? (
                        <PrivateButtons
                            username={data.user.username}
                            handleLogout={handleLogout}
                        />
                    ) : (
                        <PublicButtons />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
