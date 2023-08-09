import React from 'react'
import { Flex, Text, Image, Box, Button } from '@chakra-ui/react'
import { CgFileDocument } from 'react-icons/cg';
import shape from '../public/assets/tilt.svg'

export const Download = () => {
  return (
    <>
    
    <Flex w='100%' h='200px' bg={'purpleColor'} my={0} sx={{ transform: "skewY(-3deg)" }} alignItems='center' boxShadow={'xl'} >
        <Flex justifyContent={'center'} sx={{transform: "skewY(3deg)"}} w='full' alignItems='center' gap={10}>
            <Text letterSpacing={2} textTransform="uppercase" fontWeight={'normal'} color={'white'} my={4} py={4} fontSize={'lg'}>Baixe agora o meu currículo!</Text>
            <Button rightIcon={<CgFileDocument />} variant="buttonOutline" >
                Download CV
            </Button>
        </Flex>
    </Flex>
    </>

  )
}
