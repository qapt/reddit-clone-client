import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ImArrowDown } from 'react-icons/im';
import { useDownvotedPosts, useDownVoteMutation } from '../../api/votes';
import AuthModalHandler from '../Auth/AuthModalHandler';

const DownvoteButton = ({ postId }: any) => {
    const { data, isError } = useDownvotedPosts();

    const downvoteMutation = useDownVoteMutation();

    const [isDownvoted, setIsDownvoted] = useState<boolean>(false);

    useEffect(() => {
        // if !isloggedin > set to false, pass userdata into query ?
        if (data) {
            if (data.posts.some((post: any) => post.postId === postId)) {
                setIsDownvoted(true);
            } else {
                setIsDownvoted(false);
            }
        }
        if (isError) {
            setIsDownvoted(false);
        }
    }, [data, isError, postId]);

    const downvotePost = () => {
        downvoteMutation.mutate(postId);
    };

    return (
        <AuthModalHandler action={downvotePost}>
            <Box pt={2} _hover={{ cursor: 'pointer' }}>
                <ImArrowDown
                    fontSize='22px'
                    color={isDownvoted ? '#7193ff' : '#878a8c'}
                />
            </Box>
        </AuthModalHandler>
    );
};

export default DownvoteButton;
