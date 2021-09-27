import { Box, Spinner } from '@chakra-ui/react';

const CenterLoadingSpinner = () => {
    return (
        <Box justifyContent='center' display='flex'>
            <Spinner size='xl' mt={20} color='teal' />
        </Box>
    );
};

export default CenterLoadingSpinner;
