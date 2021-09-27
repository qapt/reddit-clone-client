import { Box, useColorMode } from '@chakra-ui/react';

const ToggleThemeModeButton = () => {
    const { toggleColorMode } = useColorMode();
    return <Box onClick={toggleColorMode}>Toggle</Box>;
};

export default ToggleThemeModeButton;
