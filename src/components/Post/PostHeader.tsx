import { Avatar, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PostHeader = ({ subredditName, username }: any) => {
    return (
        <Box fontSize='xs' py={2}>
            <Link to={`/r/${subredditName}`}>
                <Avatar size='2xs' /> r/
                {subredditName}
            </Link>{' '}
            · Posted by {username}
        </Box>
    );
};

export default PostHeader;
