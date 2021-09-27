import { Avatar, Box, Input, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSubredditsList } from '../../api/subreddits';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    Heading,
    Text,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { Search2Icon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';

const other = [
    'User Settings',
    'Messages',
    'Create Post',
    'Create Community',
    'Coins',
    'Premium',
];
const feed = ['Home', 'Popular', 'All', 'Top Communities', 'Reddit Live'];

const SubredditSelector = () => {
    const { data } = useSubredditsList();
    const [displayName, setDisplayName] = useState<string>('Home');
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
                        <Box>
                            <Box
                                w='15vw'
                                p={2}
                                display={{ lg: 'flex', md: 'none', sm: 'none' }}
                                alignItems='center'
                                justifyContent='space-between'
                                _hover={{
                                    cursor: 'pointer',
                                    border: '1px solid teal',
                                }}
                                borderRadius='4px'
                                variant='link'
                                cursor='pointer'
                                overflow='hidden'
                            >
                                <Box display='flex' alignItems='center'>
                                    <Search2Icon size='sm' ml={2} mr={4} />
                                    {displayName}
                                </Box>
                                <Box>
                                    <FaChevronDown size='10px' />
                                </Box>
                            </Box>
                            <Box
                                p={2}
                                display={{ lg: 'none', md: 'flex', sm: 'flex' }}
                                _hover={{
                                    cursor: 'pointer',
                                    border: '1px solid teal',
                                }}
                                borderRadius='4px'
                                variant='link'
                                cursor='pointer'
                                mx={4}
                            >
                                <Box>
                                    <Search2Icon size='sm' />
                                </Box>
                            </Box>
                        </Box>
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
                                    <Heading fontSize='sm' py={2}>
                                        REDDIT FEEDS
                                    </Heading>

                                    {feed.map((item) => (
                                        <Box display='flex' py={1} key={item}>
                                            <Avatar size='xs' mr={3} />
                                            <Text>{item}</Text>
                                        </Box>
                                    ))}

                                    <Heading fontSize='sm' pt={4} pb={2}>
                                        MY COMMUNITIES
                                    </Heading>
                                    {data &&
                                        data.map((sub: any) => (
                                            <Box
                                                display='flex'
                                                py={1}
                                                key={sub.id}
                                            >
                                                <Avatar size='xs' mr={3} />
                                                <Link
                                                    to={`/r/${sub.name}`}
                                                    onClick={() => {
                                                        setDisplayName(
                                                            'r/' + sub.name
                                                        );
                                                        setText('');
                                                        onClose();
                                                    }}
                                                >
                                                    r/{sub.name}
                                                </Link>
                                            </Box>
                                        ))}
                                    <Heading fontSize='sm' pt={4} pb={2}>
                                        OTHER
                                    </Heading>

                                    {other.map((item) => (
                                        <Box display='flex' py={1} key={item}>
                                            <Avatar size='xs' mr={3} />
                                            <Text>{item}</Text>
                                        </Box>
                                    ))}
                                </VStack>
                            ) : (
                                <VStack align='stretch' px={4}>
                                    <Heading fontSize='sm' py={2}>
                                        REDDIT FEEDS
                                    </Heading>

                                    {feed.map((item) => {
                                        if (
                                            item
                                                .toLowerCase()
                                                .includes(text.toLowerCase())
                                        ) {
                                            return (
                                                <Box
                                                    display='flex'
                                                    py={1}
                                                    key={item}
                                                >
                                                    <Avatar size='xs' mr={3} />
                                                    <Text>{item}</Text>
                                                </Box>
                                            );
                                        }
                                        return '';
                                    })}

                                    <Heading fontSize='sm' pt={4} pb={2}>
                                        MY COMMUNITIES
                                    </Heading>
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
                                                            to={`/r/${sub.name}`}
                                                            onClick={() => {
                                                                setDisplayName(
                                                                    'r/' +
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
                                    <Heading fontSize='sm' pt={4} pb={2}>
                                        OTHER
                                    </Heading>

                                    {other.map((item) => {
                                        if (
                                            item
                                                .toLowerCase()
                                                .includes(text.toLowerCase())
                                        ) {
                                            return (
                                                <Box
                                                    display='flex'
                                                    py={1}
                                                    key={item}
                                                >
                                                    <Avatar size='xs' mr={3} />
                                                    <Text>{item}</Text>
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

export default SubredditSelector;
