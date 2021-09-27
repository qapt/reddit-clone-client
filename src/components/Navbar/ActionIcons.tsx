import { Text, Box, HStack, Button, useColorModeValue } from '@chakra-ui/react';
import { FaEnvelope, FaPen, FaCoins } from 'react-icons/fa';
import { IoStatsChartSharp } from 'react-icons/io5';
import { BsGraphUp, BsFillChatDotsFill } from 'react-icons/bs';
import { CgCamera } from 'react-icons/cg';
import { Link } from 'react-router-dom';
const ActionIcons = () => {
    return (
        <>
            <Box
                display={{ lg: 'flex', md: 'none', sm: 'none' }}
                alignItems='center'
                px={4}
            >
                <HStack spacing={6} fontSize='large'>
                    <BsGraphUp />
                    <IoStatsChartSharp />
                    <CgCamera />
                    <BsFillChatDotsFill />
                    <FaEnvelope />
                    <Link to='/submit'>
                        <FaPen />
                    </Link>

                    <Button
                        colorScheme='yellow'
                        borderRadius='3xl'
                        px={6}
                        variant='outline'
                    >
                        <FaCoins />
                        <Text
                            ml={2}
                            color={useColorModeValue('black', 'white')}
                        >
                            Get Coins
                        </Text>
                    </Button>
                </HStack>
            </Box>
            <Box
                display={{ lg: 'none', md: 'flex', sm: 'flex' }}
                alignItems='center'
                p={2}
                mx={2}
            >
                <Link to='/submit'>
                    <Text fontSize='30px'>+</Text>
                </Link>
            </Box>
        </>
    );
};

export default ActionIcons;
