import { Flex, useColorModeValue } from '@chakra-ui/react';

const FlexWrapper = (props: any) => {
    return (
        <Flex
            background={useColorModeValue('white', '#1a1a1b')}
            border={`1px solid ${useColorModeValue('#ccc', '#343536')}`}
            borderRadius='4px'
            {...props}
        >
            {props.children}
        </Flex>
    );
};

export default FlexWrapper;
