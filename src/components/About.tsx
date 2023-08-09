import React from 'react'
import { Flex, Text, Image, Stack, HStack, Button, Heading, Box } from '@chakra-ui/react'
import Link from 'next/link';
import { CgFileDocument } from 'react-icons/cg';
import minhaFoto from '../public/assets/eu.jpg'
import { Download } from '../components/Download'



export const About = () => {

    return (
        <>
            <Flex
            id='about'
            w="full"
            alignItems="center"
            >
            <Stack
                zIndex={2000}
                // maxW="1240px"
                w={'100%'}
                // borderRadius={'15px'}
                bg={'background'}
                boxShadow={'xl'}
                p={100}
                // m="auto"
                gridGap={8}
                alignItems="center"
                direction={{ base: 'column', lg: 'row' }} // Define a direção da Stack: coluna em telas menores e linha em telas maiores (a partir do breakpoint md)
                // _hover={{ boxShadow: "xl", color: "purpleColor", transform: "scale(1.008)" }}
                // transition="ease-in 300ms"
                sx={{
                    transform: "skewY(-3deg)", // Aplica inclinação por padrão
                }}


            >
                <Flex
                    flexDir="column"
                    sx={{
                        transform: "skewY(3deg)", // Aplica inclinação por padrão
                    }}>
                    <Flex alignItems={'center'} justifyContent={'center'} w={'100%'} flexDir={'column'}>
                        <Heading fontSize="40px" letterSpacing="widest" color="purpleColor">
                            Sobre Mim
                        </Heading>
                        <Text py={4} as="h2" color='text'>
                            ... ok, mas quem é o Gustavo Neves?
                        </Text>
                    </Flex>

                    <Text py={2} textAlign="justify" color='text'>
                        Minha jornada no desenvolvimento de software teve início desde cedo,
                        quando, ainda menino, me despertou a curiosidade sobre a criação dos
                        jogos. Desde então, esta paixão se transformou em uma profissão que
                        abraço com entusiasmo. Durante minha trajetória, acumulei experiência
                        trabalhando em projetos freelance, desenvolvendo sites e sistemas internos
                        que envolviam desde o back-end até o front-end e a gestão de bases de dados.
                    </Text>
                    <Text py={2} color='text' textAlign="justify">
                        Ao longo dos anos, adquiri proficiência em diversas linguagens de programação,
                        como Java, JavaScript, Node, PHP e Flutter, além de dominar plataformas CMS
                        populares, como WordPress. Atualmente, minha especialização está voltada para
                        NextJS on ReactJS, e utilizo tecnologias de ponta, como Docker, e bases de dados
                        RDBMS, especialmente o PostgresSQL. Adicionalmente, minha veia criativa se revela
                        na criação de protótipos e no design de interfaces de usuário com Figma e Adobe XD.
                    </Text>
                    <Text py={2} color='text' textAlign="justify">
                        Além das habilidades técnicas que me orgulho de possuir, acredito firmemente
                        na importância da comunicação clara e da colaboração para alcançar os melhores
                        resultados. Com criatividade, flexibilidade e uma atitude positiva, entrego altíssimo valor às partes
                        interessadas com quem trabalho. Acredito que cada nova experiência é uma
                        oportunidade de aprendizado, e estou ansioso para continuar crescendo e aprendendo
                        com os desafios que o futuro me reserva.
                    </Text>

                </Flex>
                <Image
                    src={minhaFoto.src}
                    alt="Minha Foto"
                    boxSize={{ base: '300px', md: '300px' }}
                    border="solid 6px rgba(86, 81, 229, 0.5)"
                    boxShadow="inset 0 0 0 9px rgba(255, 255, 255, 0.3)"
                    borderRadius="60% 40% 30% 70% / 60% 30% 70% 40%"
                    animation="profile_animate 8s ease-in-out infinite 1s"

                />
            </Stack>
        </Flex>
        <Download />
        
        </>

    );
}
