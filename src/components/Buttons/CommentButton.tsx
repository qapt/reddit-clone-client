import { Link } from 'react-router-dom';

import { Flex, Box, Text } from '@chakra-ui/react';
import { FaCommentAlt } from 'react-icons/fa';

const CommentButton = ({ postId }: any) => {
    return (
        <Flex px={2} alignItems='center' _hover={{ cursor: 'pointer' }}>
            <Box mx={1}>
                <FaCommentAlt />
            </Box>
            <Text>
                <Link to={`/comments/${postId}`}>2 Comments</Link>
            </Text>
        </Flex>
    );
};

export default CommentButton;
