import {Box, chakra, Flex, ListItem, UnorderedList} from '@chakra-ui/react';

import React from 'react';

const Detailed = ({currentUser}) => {
    return (
        <section id='about'>
            <Flex
                h='350px'
                mt={2}
                py='4'
                px='4'
                mx='auto'
                shadow='lg'
                rounded='lg'
                overflow='hidden'>
                <Box
                    w={2 / 5}
                    fit='cover'
                    objectPosition='center'
                    bgSize='cover'
                    style={{
                        backgroundImage: `url(${currentUser?.picture?.large})`,
                        borderRadius: '32px',
                    }}></Box>

                <Box w={3 / 5} p={{base: 4, md: 8}}>
                    <chakra.h1 fontSize='2xl' fontWeight='bold'>
                        {currentUser.name?.title}. {currentUser.name.last}{' '}
                        {currentUser.name.first}
                    </chakra.h1>

                    <chakra.p py={2}>
                        A few words about {currentUser?.name.first} {currentUser?.name.last}
                    </chakra.p>
                    <UnorderedList>
                        <ListItem>
                            <chakra.p pt={2}> City: {currentUser?.location?.city}</chakra.p>
                        </ListItem>
                        <ListItem>
                            <chakra.p> State: {currentUser?.location?.state}</chakra.p>
                        </ListItem>
                        <ListItem>
                            <chakra.p> Email: {currentUser?.email}</chakra.p>
                        </ListItem>
                        <ListItem>
                            <chakra.p> Phone: {currentUser?.phone}</chakra.p>
                        </ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
        </section>
    );
};

export default Detailed;
