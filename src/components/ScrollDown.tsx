import React from 'react'
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react'

export const ScrollDown = () => {

    const color = useColorModeValue("gray.600", "gray.400");

    return (
        <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} w={'full'} >
            <Box >
                <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path id="wheel" d="M123.359,79.775l0,72.843" className="svg-path scroll" />
                    <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" className="svg-path" />
                </svg>
            </Box>
            <Text
                letterSpacing={2}
                textTransform="uppercase"
                fontWeight={'normal'}
                color={color}
                py={4}
                fontSize={'sm'}
                _hover={{ color: 'purpleColor' }}
                transition="ease-in 300ms"
            >Scroll Down</Text>
        </Flex>
    )
}

