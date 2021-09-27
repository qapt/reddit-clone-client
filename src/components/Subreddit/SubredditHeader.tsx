import {
    Box,
    Container,
    Heading,
    Text,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import SubscribeButton from '../Buttons/SubscribeButton';

const SubredditHeader = ({ subreddit, accentColor }: any) => {
    const { subredditName } = useParams<any>();
    return (
        <>
            <Box background={subreddit && subreddit.color} minH='6em' />
            <Box
                minH='6em'
                display='flex'
                alignItems='center'
                background={useColorModeValue('white', 'gray.900')}
            >
                <Container maxW='6xl' display='flex' alignItems='center'>
                    <Box overflow='auto'>
                        <Avatar size='lg' />
                    </Box>
                    <Box px={10}>
                        <Heading>{subreddit && subreddit.title}</Heading>
                        <Text>{`r/${subredditName}`}</Text>
                    </Box>
                    <SubscribeButton
                        accentColor={accentColor}
                        subredditId={subreddit && subreddit.id}
                        subredditName={subreddit && subreddit.name}
                    />
                </Container>
            </Box>
        </>
    );
};

export default SubredditHeader;
