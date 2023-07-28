import { Box, Flex, useColorModeValue, Text, Heading, IconButton, Image  } from '@chakra-ui/react'
import { TiSocialLinkedin } from "react-icons/ti";
import { VscGithubInverted } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import  mimoji from "../public/assets/mimojis/mimoji3.png"

export const Main = () => {

  const colorText = useColorModeValue("gray.600", "gray.400");


  return (
    <Flex h="100vh" textAlign="center" alignItems="center">
      <Flex maxW="1240px" w="full" mx="auto" p={2} justifyContent="center">
        <Box >
          <Text letterSpacing={2} textTransform="uppercase" fontWeight={'normal'} color={colorText} my={4} py={4} fontSize={'sm'}>Vamos juntos criar uma solução inovadora!</Text>
          <Heading color={colorText} py={1}>Olá, eu sou o <span style={{ color: '#5651E5' }}>Gustavo</span>,</Heading>
          <Heading color={colorText} py={1}>Engenheiro de Software</Heading>
          <Text
            color={colorText}
            m={'auto'}
            py={4}
            fontSize={'md'}
            maxW={'70%'}
          >
            Sou um Desenvolvedor Web Full-Stack especializado em Front-end, apaixonado por tecnologia, inovação e empreendedorismo. Com um conjunto diversificado
            de habilidades e experiências, tanto como designer quanto desenvolvedor de software, trago uma leque de conhecimentos para o "front".
          </Text>
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            maxW={'330px'}
            m={'auto'}
            py={4}
          >
            <IconButton
              as="button"
              aria-label="LinkedIn"
              icon={<TiSocialLinkedin />}
              rounded="full"
              boxShadow="md"
              p={3}
              cursor="pointer"
              transition="ease-in 300ms"
              _hover={{ boxShadow: "xl", color: "purpleColor", transform: "scale(1.1)" }}
            />
            <IconButton
              as="button"
              aria-label="Close"
              icon={<VscGithubInverted />}
              rounded="full"
              boxShadow="md"
              p={3}
              transition="ease-in 300ms"
              _hover={{ boxShadow: "xl", color: "purpleColor", transform: "scale(1.1)" }}
            />
            <IconButton
              as="button"
              aria-label="Close"
              icon={<BiLogoGmail />}
              rounded="full"
              boxShadow="md"
              p={3}
              transition="ease-in 300ms"
              _hover={{ boxShadow: "xl", color: "purpleColor", transform: "scale(1.1)" }}
            />
            <IconButton
              as="button"
              aria-label="Close"
              icon={<BsInstagram />}
              rounded="full"
              boxShadow="md"
              p={3}
              transition="ease-in 300ms"
              _hover={{ boxShadow: "xl", color: "purpleColor", transform: "scale(1.1)" }}
            />
          </Flex>
          <Image src={mimoji.src} alt="Logo GustavoNeves" width={300} ml={'auto'} />
        </Box>
      </Flex >
    </Flex >
  )
}
