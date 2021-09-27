import { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    Input,
    Stack,
    Flex,
    Textarea,
    Spinner,
    Text,
} from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';
import { useCreatePostMutation } from '../../api/posts';

const CreateTextPostForm = () => {
    const history = useHistory();
    const { subredditName } = useParams<any>();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [tagsString, setTagsString] = useState<string>('');

    const createPostMutation = useCreatePostMutation();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const tagsWithoutSpaces = tagsString.replace(/\s/g, '');
        const splitTags = tagsWithoutSpaces.split(',');
        const tags = splitTags.filter((t) => t !== '');

        const newPost = { subredditName, title, content, tags };
        if (subredditName) {
            const data = await createPostMutation.mutateAsync(newPost);
            history.push(`/comments/${data.post.id}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <Stack spacing={4}>
                    <FormControl id='username'>
                        <Input
                            placeholder='Title'
                            focusBorderColor='teal.400'
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id='content'>
                        <Textarea
                            minH='10em'
                            placeholder='Text (optional)'
                            focusBorderColor='teal.400'
                            type='text'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </FormControl>

                    <Flex justifyContent='space-between' alignItems='center'>
                        <Box minW='30%'>
                            <FormControl id='tags'>
                                <Input
                                    placeholder='Tags (separate by a comma)'
                                    focusBorderColor='teal.400'
                                    type='text'
                                    value={tagsString}
                                    onChange={(e) =>
                                        setTagsString(e.target.value)
                                    }
                                />
                            </FormControl>
                        </Box>
                        {createPostMutation.isError ? (
                            <Text color='red'>Please choose a community</Text>
                        ) : null}
                        <Box>
                            <Button
                                variant='outline'
                                colorScheme='teal'
                                borderRadius='3xl'
                                px={6}
                                disabled={true}
                            >
                                Save Draft
                            </Button>
                            <Button
                                type='submit'
                                colorScheme='teal'
                                borderRadius='3xl'
                                px={6}
                                ml={2}
                                disabled={title && content ? false : true}
                            >
                                {createPostMutation.isLoading ? (
                                    <Spinner />
                                ) : (
                                    'Post'
                                )}
                            </Button>
                        </Box>
                    </Flex>
                </Stack>
            </Box>
        </form>
    );
};

export default CreateTextPostForm;
