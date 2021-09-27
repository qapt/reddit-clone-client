import { Flex, Text, useColorModeValue, Spinner, Box } from '@chakra-ui/react';
import { usePostVotes } from '../../api/votes';
import DownvoteButton from './DownvoteButton';
import UpvoteButton from './UpvoteButton';

const VoteSection = ({ postId }: any) => {
    const { data, isLoading } = usePostVotes(postId);

    return (
        <Flex direction='column' alignItems='center' px={3} pt={4}>
            <UpvoteButton postId={postId} />
            <Box color={useColorModeValue('black', 'white')}>
                {isLoading ? (
                    <Spinner size='xs' color='teal' />
                ) : (
                    <Text fontWeight='bold'>{data.votes}</Text>
                )}
            </Box>

            <DownvoteButton postId={postId} />
        </Flex>
    );
};

export default VoteSection;
