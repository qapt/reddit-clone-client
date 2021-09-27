import {
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
    MenuDivider,
    Text,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ToggleThemeModeButton from '../Buttons/ToggleThemeModeButton';

import ActionIcons from './ActionIcons';

const PrivateButtons = ({ username, handleLogout }: any) => {
    return (
        <Menu>
            <ActionIcons />
            <MenuButton
                borderRadius='4px'
                variant='link'
                cursor='pointer'
                border={`1px solid ${useColorModeValue('white', '#1a202c')}`}
                _hover={{
                    border: '1px solid teal',
                    transform: 'none',
                }}
                px={2}
            >
                <Box display='flex'>
                    <Box display='flex' alignItems='center'>
                        <Box>
                            <Avatar size='xs' />
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='start'
                        fontSize='sm'
                        pl={2}
                        pr={4}
                    >
                        <Text>{username}</Text>
                        <Text>*100</Text>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <FaChevronDown fontSize='sm' />
                    </Box>
                </Box>
            </MenuButton>
            <MenuList>
                <MenuItem>
                    <ToggleThemeModeButton />
                </MenuItem>
                <MenuItem>
                    <Link to='/submit'>Create Post</Link>
                </MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default PrivateButtons;
