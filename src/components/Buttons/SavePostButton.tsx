import { Flex, Box, Text, Spinner, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RiFileAddFill, RiFileReduceFill } from 'react-icons/ri';
import { useCurrentUser } from '../../api/auth';
import { useSavedPosts, useSavePostMutation } from '../../api/posts';
import AuthModalHandler from '../Auth/AuthModalHandler';

const SavePostButton = ({ postId }: any) => {
    const toast = useToast();
    const savePostMutation = useSavePostMutation();
    const { data: userData } = useCurrentUser();

    const { data } = useSavedPosts();

    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        if (data) {
            if (data.posts.some((post: any) => post.postId === postId)) {
                setIsSaved(true);
            } else {
                setIsSaved(false);
            }
        }
        if (userData && !userData.isLoggedIn) {
            setIsSaved(false);
        }
    }, [data, postId, userData]);

    const savePost = () => {
        savePostMutation.mutate(postId, {
            onSuccess: () => {
                toast({
                    title: `Post ${isSaved ? 'unsaved ' : 'saved '}
                                successfully`,
                    duration: 1500,
                    isClosable: true,
                    variant: 'left-accent',
                    status: 'success',
                });
            },
        });
    };

    return (
        <AuthModalHandler action={savePost}>
            <Flex px={2} alignItems='center' _hover={{ cursor: 'pointer' }}>
                <Box mx={1}>
                    {savePostMutation.isLoading ? (
                        <Spinner size='xs' color='teal' />
                    ) : isSaved ? (
                        <RiFileReduceFill />
                    ) : (
                        <RiFileAddFill />
                    )}
                </Box>
                <Text> {isSaved ? 'Unsave' : 'Save'}</Text>
            </Flex>
        </AuthModalHandler>
    );
};

export default SavePostButton;
