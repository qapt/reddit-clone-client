import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:5000/posts';

export function useCreatePostMutation() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ subredditName, title, content, tags }: any) => {
            try {
                const { data } = await axios.post(
                    `${BASE_URL}`,
                    { subredditName, title, content, tags },
                    { withCredentials: true }
                );
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        {
            onSuccess: () => queryClient.invalidateQueries('postsBySubreddit'),
        }
    );
}

export function useAllPosts() {
    return useQuery(
        'allPosts',
        async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}`);
                return data;
            } catch (err) {
                throw new Error('Error fetching all posts. Please try again.');
            }
        },
        { refetchOnWindowFocus: false }
    );
}

export function usePostById(postId: string) {
    return useQuery(
        ['postById', postId],
        async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/${postId}`);
                return data;
            } catch (err) {
                throw new Error('Error fetching post by id. Please try again.');
            }
        },
        { refetchOnWindowFocus: false }
    );
}

export function usePostsBySubreddit(subredditName: string) {
    return useQuery(
        ['postsBySubreddit', subredditName],
        async () => {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/subreddit/${subredditName}`
                );
                return data;
            } catch (err) {
                throw new Error(
                    'Error fetching posts by subreddit. Please try again.'
                );
            }
        },
        { refetchOnWindowFocus: false }
    );
}

export function useSavePostMutation() {
    const queryClient = useQueryClient();
    return useMutation(
        async (postId: string) => {
            try {
                const { data } = await axios.post(
                    `${BASE_URL}/save/${postId}`,
                    {},
                    {
                        withCredentials: true,
                    }
                );
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        {
            onSuccess: () => queryClient.invalidateQueries('savedPosts'),
        }
    );
}

export function useSavedPosts() {
    return useQuery(
        'savedPosts',
        async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/save/all`, {
                    withCredentials: true,
                });
                return data;
            } catch (err) {
                throw new Error(
                    'Error fetching saved posts. Please try again.'
                );
            }
        },
        { refetchOnWindowFocus: false, retry: false }
    );
}
