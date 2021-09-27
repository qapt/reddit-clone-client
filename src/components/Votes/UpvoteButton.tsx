import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ImArrowUp } from 'react-icons/im';
import { useUpvotedPosts, useUpvoteMutation } from '../../api/votes';
import AuthModalHandler from '../Auth/AuthModalHandler';

const UpvoteButton = ({ postId }: any) => {
    const { data, isError } = useUpvotedPosts();
    const upvoteMutation = useUpvoteMutation();

    const [isUpvoted, setIsUpvoted] = useState<boolean>(false);

    useEffect(() => {
        if (data) {
            if (data.posts.some((post: any) => post.postId === postId)) {
                setIsUpvoted(true);
            } else {
                setIsUpvoted(false);
            }
        }
        if (isError) {
            setIsUpvoted(false);
        }
    }, [data, isError, postId]);

    const upvotePost = () => {
        upvoteMutation.mutate(postId);
    };

    return (
        <AuthModalHandler action={upvotePost}>
            <Box pb={2} _hover={{ cursor: 'pointer' }}>
                <ImArrowUp
                    fontSize='22px'
                    color={isUpvoted ? '#ff4500' : '#878a8c'}
                />
            </Box>
        </AuthModalHandler>
    );
};

export default UpvoteButton;
