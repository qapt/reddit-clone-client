import { Flex, Box, Text } from '@chakra-ui/react';
import { FaGift, FaShare } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import CommentButton from '../Buttons/CommentButton';
import SavePostButton from '../Buttons/SavePostButton';

const ActionButtons = ({ postId }: any) => {
    return (
        <>
            <Flex
                color='#878a8c'
                fontSize='sm'
                fontWeight='bold'
                mt={4}
                mb={2}
                mx={2}
            >
                <CommentButton postId={postId} />
                <Flex px={2} alignItems='center' _hover={{ cursor: 'pointer' }}>
                    <Box mx={1}>
                        <FaGift />
                    </Box>
                    <Text>Award</Text>
                </Flex>
                <Flex px={2} alignItems='center' _hover={{ cursor: 'pointer' }}>
                    <Box mx={1}>
                        <FaShare />
                    </Box>
                    <Text>Share</Text>
                </Flex>
                <SavePostButton postId={postId} />
                <Flex px={2} alignItems='center' _hover={{ cursor: 'pointer' }}>
                    <BsThreeDots />
                </Flex>
            </Flex>
        </>
    );
};

export default ActionButtons;
