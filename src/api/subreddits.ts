import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:5000/subreddits';

export function useSubredditsList() {
    return useQuery(
        'subreddits',
        async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}`);
                return data;
            } catch (err) {
                throw new Error(
                    'Error fetching subreddit list. Please try again.'
                );
            }
        },
        { refetchOnWindowFocus: false }
    );
}

export function useSubredditByName(subredditName: string) {
    return useQuery(
        ['subreddit', subredditName],
        async () => {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/${subredditName}`
                );
                return data;
            } catch (error) {
                throw new Error(
                    'Error fetching subreddit by name. Please try again.'
                );
            }
        },
        { refetchOnWindowFocus: false }
    );
}

export function useSubscribedIds(subredditId: string) {
    return useQuery(
        ['subscribedIds', subredditId],
        async () => {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/${subredditId}/subscriptions`,
                    { withCredentials: true }
                );
                return data;
            } catch (err) {
                throw new Error(
                    'Error fetching subscribed ids list. Please try again.'
                );
            }
        },
        { refetchOnWindowFocus: false, retry: false }
    );
}

export function useSubscribeMutation() {
    const queryClient = useQueryClient();
    return useMutation(
        async (subredditId: any) => {
            try {
                await axios.post(
                    `${BASE_URL}/${subredditId}/subscriptions`,
                    {},
                    { withCredentials: true }
                );
            } catch (error) {
                console.log(error);
                throw new Error(error);
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('subscribedIds');
            },
        }
    );
}
