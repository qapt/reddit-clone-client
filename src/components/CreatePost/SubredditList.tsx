import { Avatar, Box, Flex, Input, VStack } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useSubredditsList } from '../../api/subreddits';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    Text,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { Search2Icon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';

const SubredditList = () => {
    const { subredditName } = useParams<any>();
    const { data } = useSubredditsList();
    const [displayName, setDisplayName] = useState<string>(
        subredditName ? subredditName : 'Choose a community'
    );
    const [text, setText] = useState<string>('');
    const initialFocusRef = useRef<any>();

    return (
        <Popover
            initialFocusRef={initialFocusRef}
            closeOnBlur={true}
            closeOnEsc={true}
        >
            {({ onClose }) => (
                <>
                    <PopoverTrigger>
                        <Flex
                            p={2}
                            cursor='pointer'
                            justifyContent='space-between'
                            w='100%'
                            alignItems='center'
                        >
                            <Flex alignItems='center'>
                                <Search2Icon size='sm' ml={2} mr={4} />
                                <Text size='sm'>
                                    {subredditName
                                        ? `r/${displayName}`
                                        : displayName}
                                </Text>
                            </Flex>
                            <Box>
                                <FaChevronDown size='10px' />
                            </Box>
                        </Flex>
                    </PopoverTrigger>
                    <PopoverContent maxH='xl' overflow='auto'>
                        <PopoverHeader>
                            <Input
                                id='text'
                                ref={initialFocusRef}
                                type='text'
                                value={text}
                                focusBorderColor='teal.400'
                                onChange={(e) => {
                                    setText(e.target.value);
                                }}
                            />
                        </PopoverHeader>
                        <PopoverBody>
                            {!text ? (
                                <VStack align='stretch' px={4}>
                                    {data &&
                                        data.map((sub: any) => (
                                            <Box
                                                display='flex'
                                                py={1}
                                                key={sub.id}
                                            >
                                                <Avatar size='xs' mr={3} />
                                                <Link
                                                    to={`/r/${sub.name}/submit`}
                                                    onClick={() => {
                                                        setDisplayName(
                                                            sub.name
                                                        );
                                                        setText('');
                                                        onClose();
                                                    }}
                                                >
                                                    r/{sub.name}
                                                </Link>
                                            </Box>
                                        ))}
                                </VStack>
                            ) : (
                                <VStack align='stretch' px={4}>
                                    {data &&
                                        data.map((sub: any) => {
                                            if (
                                                sub.name
                                                    .toLowerCase()
                                                    .includes(
                                                        text.toLowerCase()
                                                    )
                                            ) {
                                                return (
                                                    <Box
                                                        display='flex'
                                                        py={1}
                                                        key={sub.id}
                                                    >
                                                        <Avatar
                                                            size='xs'
                                                            mr={3}
                                                        />
                                                        <Link
                                                            to={`/r/${sub.name}/submit`}
                                                            onClick={() => {
                                                                setDisplayName(
                                                                    sub.name
                                                                );
                                                                setText('');
                                                                onClose();
                                                            }}
                                                        >
                                                            r/{sub.name}
                                                        </Link>
                                                    </Box>
                                                );
                                            }
                                            return '';
                                        })}
                                </VStack>
                            )}
                        </PopoverBody>
                    </PopoverContent>
                </>
            )}
        </Popover>
    );
};

export default SubredditList;
