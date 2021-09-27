import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:5000/accounts';

export function useCurrentUser() {
    return useQuery(
        'currentUser',
        async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}`, {
                    withCredentials: true,
                });
                return data;
            } catch (err) {
                throw new Error('Error fetching user. Please try again.');
            }
        },
        {
            refetchOnWindowFocus: false,
        }
    );
}

export function useLogoutUser() {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            await axios.post(
                'http://localhost:5000/accounts/logout',
                {},
                {
                    withCredentials: true,
                }
            );
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('currentUser');
                queryClient.invalidateQueries('savedPosts');
                queryClient.invalidateQueries('subscribedIds');
                queryClient.invalidateQueries('upvotedPosts');
                queryClient.invalidateQueries('downvotedPosts');
            },
        }
    );
}

export function useRegisterUser() {
    const queryClient = useQueryClient();

    return useMutation(
        async ({ name, username, email, password }: any) => {
            try {
                await axios.post(
                    `${BASE_URL}/register`,
                    {
                        name,
                        username,
                        email,
                        password,
                    },
                    { withCredentials: true }
                );
            } catch (error) {
                throw new Error(error);
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('currentUser');
                queryClient.invalidateQueries('savedPosts');
                queryClient.invalidateQueries('subscribedIds');
                queryClient.invalidateQueries('upvotedPosts');
                queryClient.invalidateQueries('downvotedPosts');
            },
        }
    );
}

export function useLoginUser() {
    const queryClient = useQueryClient();

    return useMutation(
        async ({ username, password }: any) => {
            try {
                const { data } = await axios.post(
                    `${BASE_URL}/login`,
                    {
                        username,
                        password,
                    },
                    { withCredentials: true }
                );
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('currentUser');
                queryClient.invalidateQueries('savedPosts');
                queryClient.invalidateQueries('subscribedIds');
                queryClient.invalidateQueries('upvotedPosts');
                queryClient.invalidateQueries('downvotedPosts');
            },
        }
    );
}
