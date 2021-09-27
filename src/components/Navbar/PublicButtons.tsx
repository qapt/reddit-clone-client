import {
    Button,
    Avatar,
    MenuList,
    MenuItem,
    Menu,
    MenuButton,
    useColorModeValue,
    Box,
    Flex,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import AuthModalHandler from '../Auth/AuthModalHandler';
import ToggleThemeModeButton from '../Buttons/ToggleThemeModeButton';

const PublicButtons = () => {
    return (
        <>
            <AuthModalHandler>
                <Button
                    variant='outline'
                    colorScheme='teal.400'
                    mr={2}
                    mx={2}
                    borderRadius='3xl'
                    px={6}
                >
                    Log In
                </Button>
                <Button
                    variant='solid'
                    color='white'
                    bg='teal.400'
                    mx={2}
                    px={6}
                    borderRadius='3xl'
                >
                    Sign Up
                </Button>
            </AuthModalHandler>

            <Menu>
                <MenuButton
                    mr={14}
                    ml={2}
                    borderRadius='4px'
                    variant='link'
                    cursor='pointer'
                    border={`1px solid ${useColorModeValue(
                        'white',
                        '#1a202c'
                    )}`}
                    _hover={{
                        border: '1px solid teal',
                        transform: 'none',
                    }}
                >
                    <Flex alignItems='center'>
                        <Box marginRight={2}>
                            <Box>
                                <Avatar size='sm' />
                            </Box>
                        </Box>

                        <Box>
                            <FaChevronDown fontSize='sm' />
                        </Box>
                    </Flex>
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <ToggleThemeModeButton />
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default PublicButtons;
