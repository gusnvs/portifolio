import { Box, Button, IconButton } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import Link from 'next/link';


export const BackToTheTop = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (

        <Box >
            {backToTopButton && (
                <IconButton 
                zIndex={9000}
                size={'lg'}
                aria-label='To The Top' 
                icon={<ArrowUpIcon />} 
                onClick={scrollUp} 
                position={'fixed'} 
                bottom={6} 
                right={6}
                fontSize={20}
                color={'white'}
                bg={'purpleColor'} 
                boxShadow={'xl'}
                _hover={{ transform: "scale(1.1)" }}
                _active={{ bg: 'purple.900'}}
                
                />
            )}
        </Box>

        // <Link href='/'>
        //     <IconButton
        //         zIndex={1100}
        //         size={'lg'}
        //         aria-label='To The Top'
        //         icon={<ArrowUpIcon />}
        //         onClick={scrollUp}
        //         position={'fixed'}
        //         bottom={6}
        //         right={6}
        //         fontSize={20}
        //         color={'white'}
        //         bg={'purpleColor'}
        //         boxShadow={'xl'}
        //         _hover={{ transform: "scale(1.1)" }}
        //         _active={{ bg: 'purple.900' }}
        //         />
        // </Link>

    )
}
