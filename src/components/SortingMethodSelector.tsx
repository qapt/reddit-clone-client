import { Box, Flex, Text } from '@chakra-ui/react';
import FlexWrapper from './Layout/FlexWrapper';

import { FaRocket, FaFire } from 'react-icons/fa';
import { GiSevenPointedStar } from 'react-icons/gi';
import { BsThreeDots } from 'react-icons/bs';
import { IoStatsChart } from 'react-icons/io5';

const iconData = [
    {
        id: 1,
        icon: <FaRocket />,
        text: 'Best',
    },
    {
        id: 2,
        icon: <FaFire />,
        text: 'Hot',
    },
    {
        id: 3,
        icon: <IoStatsChart />,
        text: 'Top',
    },
    {
        id: 4,
        icon: <GiSevenPointedStar />,
        text: 'New',
    },
    {
        id: 5,
        icon: <BsThreeDots />,
    },
];

const SortingMethodSelector = () => {
    return (
        <FlexWrapper px={4} py={4} mb={4}>
            <Flex color='#0079d3' fontSize='xl' fontWeight='bold'>
                {iconData.map((item) => (
                    <Flex
                        key={item.id}
                        px={4}
                        alignItems='center'
                        _hover={{ cursor: 'pointer' }}
                    >
                        <Box mx={1}>{item.icon}</Box>
                        <Text>{item.text}</Text>
                    </Flex>
                ))}
            </Flex>
        </FlexWrapper>
    );
};

export default SortingMethodSelector;
