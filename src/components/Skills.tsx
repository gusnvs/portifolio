import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Skills = () => {
  return (
    <Flex w={'100%'} h='100vh' p={2}>
      <Flex maxW={'1240px'} mx='auto' flexDir={'column'} justifyContent='center' h={'100%'}>
        <Heading fontSize="40px" letterSpacing="widest" color="purpleColor">
          Habilidades
        </Heading>
        <Text py={4} as="h2" color='text'>
          Minhas competências
        </Text>
      </Flex>
    </Flex>
  )
}
