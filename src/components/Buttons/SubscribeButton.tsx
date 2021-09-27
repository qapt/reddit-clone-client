import { Button, Spinner, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSubscribedIds, useSubscribeMutation } from '../../api/subreddits';
import AuthModalHandler from '../Auth/AuthModalHandler';

// TODO: dont fetch savedPosts unless user is logged in
//       use react-query "enabled: false" property somehow
const SubscribeButton = ({ accentColor, subredditId, subredditName }: any) => {
    const toast = useToast();
    const [text, setText] = useState('Joined');

    const [subscribed, setSubscribed] = useState<boolean>(false);
    const { data, isError } = useSubscribedIds(subredditId);
    const subscribeToSubredditMutation = useSubscribeMutation();

    useEffect(() => {
        if (data) {
            if (
                data.subscribedIds.some(
                    (sub: any) => sub.subredditId === subredditId
                )
            ) {
                setSubscribed(true);
            } else {
                setSubscribed(false);
            }
        }
        if (isError) {
            setSubscribed(false);
        }
    }, [data, isError, subredditId]);

    const subscribeToSubreddit = () => {
        subscribeToSubredditMutation.mutate(subredditId, {
            onSuccess: () => {
                toast({
                    title: `Successfully ${
                        subscribed ? 'left ' : 'joined '
                    } r/${subredditName}`,
                    duration: 1500,
                    isClosable: true,
                    variant: 'left-accent',
                    status: 'success',
                });
            },
        });
    };

    return (
        <AuthModalHandler action={subscribeToSubreddit}>
            {subscribeToSubredditMutation.isLoading ? (
                <Button
                    colorScheme={accentColor}
                    borderRadius='3xl'
                    px={8}
                    isDisabled
                    minW='115px'
                >
                    <Spinner />
                </Button>
            ) : subscribed ? (
                <Button
                    colorScheme={accentColor}
                    variant='outline'
                    borderRadius='3xl'
                    minW='115px'
                    px={8}
                    onMouseOver={() => setText('Leave')}
                    onMouseLeave={() => setText('Joined')}
                >
                    {text}
                </Button>
            ) : (
                <Button
                    colorScheme={accentColor}
                    borderRadius='3xl'
                    px={8}
                    minW='115px'
                >
                    Join
                </Button>
            )}
        </AuthModalHandler>
    );
};

export default SubscribeButton;
