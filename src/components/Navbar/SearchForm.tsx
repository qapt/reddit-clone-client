import { Box, Input } from '@chakra-ui/react';
import { useState } from 'react';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    return (
        <Box>
            <Input
                id='searchTerm'
                type='text'
                focusBorderColor='teal.400'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                _hover={{ border: '1px solid teal' }}
                placeholder={'Search'}
            />
        </Box>
    );
};

export default SearchForm;
