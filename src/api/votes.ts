import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:5000/votes';

export function usePostVotes(postId: string) {
    return useQuery(
        ['votes', postId],
        async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/${postId}`);
                return data;
            } catch (err) {
                throw new Error('Error fetching post votes. Please try again.');
            }
        },
        { refetchOnWindowFocus: false }
    );
}

export function useUpvoteMutation() {
    const queryClient = useQueryClient();
    return useMutation(
        async (postId: string) => {
            try {
                const { data } = await axios.post(
                    `${BASE_URL}/upvotes/${postId}`,
                    {},
                    { withCredentials: true }
                );
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('votes');
                queryClient.invalidateQueries('upvotedPosts');
                queryClient.invalidateQueries('downvotedPosts');
            },
        }
    );
}

export function useDownVoteMutation() {
    const queryClient = useQueryClient();
    return useMutation(
        async (postId: string) => {
            try {
                const { data } = await axios.post(
                    `${BASE_URL}/downvotes/${postId}`,
                    {},
                    { withCredentials: true }
                );
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('votes');
                queryClient.invalidateQueries('upvotedPosts');
                queryClient.invalidateQueries('downvotedPosts');
            },
        }
    );
}

export function useUpvotedPosts() {
    return useQuery(
        'upvotedPosts',
        async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/upvotes/all`, {
                    withCredentials: true,
                });
                return data;
            } catch (err) {
                throw new Error(
                    'Error fetching upvoted posts. Please try again.'
                );
            }
        },
        { refetchOnWindowFocus: false, retry: false }
    );
}
export function useDownvotedPosts() {
    return useQuery(
        'downvotedPosts',
        async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/downvotes/all`, {
                    withCredentials: true,
                });
                return data;
            } catch (err) {
                throw new Error(
                    'Error fetching downvoted posts. Please try again.'
                );
            }
        },
        { refetchOnWindowFocus: false, retry: false }
    );
}
