import { Box, Flex, useColorModeValue, Text, Heading, IconButton, Image } from '@chakra-ui/react'
import { TiSocialLinkedin } from "react-icons/ti";
import { VscGithubInverted } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import mimoji from "../public/assets/mimojis/mimoji3.png"
import { motion } from "framer-motion";
import { ParticlesDesign } from './ParticlesDesign';
import { ScrollDown } from './ScrollDown';

export const Main = () => {

  const colorText = useColorModeValue("gray.600", "gray.400");

  const motionVariants = {
    left: {
      rotate: -10, // Grau de rotação para a esquerda
    },
    right: {
      rotate: 10, // Grau de rotação para a direita
    },
  };


  return (
    <>
      <Flex h="90vh" textAlign="center" alignItems="center" >
        <Flex maxW="1240px" w="full" mx="auto" p={2} justifyContent="center" flexDir={'column'} >
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
            {/* Imagem com o efeito de balanço */}
            {/* <motion.img
            src={mimoji.src}
            alt="Logo GustavoNeves"
            width={200}
            variants={motionVariants}
            animate="right" // Iniciar animação para a esquerda
            transition={{
              repeat: Infinity, // Repetição infinita
              repeatType: "mirror", // Inverte a animação no loop
              duration: 3, // Duração de cada ciclo de animação (2 segundos)
              ease: "easeInOut", // Curva de animação suave
            }}
          /> */}
          </Box>
          <ScrollDown />
        </Flex >

      </Flex >
    </>
  )
}
