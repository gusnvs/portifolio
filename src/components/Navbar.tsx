import React, { useState, useEffect } from "react";
import { Box, Flex, List, ListItem, useMediaQuery, IconButton, Text, useColorModeValue, transition, position } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { TiSocialLinkedin } from "react-icons/ti";
import { VscGithubInverted } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { DarkModeSwitch } from "./DarkModeSwitch";
import logoGN from "../public/assets/gusnvs.svg"
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {

    const bgColor = useColorModeValue("#ecf0f3", "gray.800");
    const [isLargerThanMd] = useMediaQuery("(min-width: 835px)");
    const [nav, setNav] = useState(false);
    const MotionBox = motion(Box);
    const AnimatedListItem = motion(ListItem);

    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');


    const handleNav = () => {
        setNav(!nav);
    }

    // const closeNav = () => {
    //     setNav(false);
    // };


    useEffect(() => {

        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }

        window.addEventListener('scroll', handleShadow);


    },[])

    return (
        <Box bg={'#ecf0f3'} w={'full'} position={'fixed'} h={'100px'} shadow={shadow ? 'xl' : 'none'} transition="ease-in 300ms"  zIndex={'1000'} >
            <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} h={'full'} px={2}>
                <Image src={logoGN.src} alt="Logo GustavoNeves" width={170} height={50} />
                {isLargerThanMd ? (
                    <Flex alignItems={'center'} gap={10}>
                        <List
                            display={'flex'}
                            gap={10}
                            style={{ listStyle: 'none' }}
                            letterSpacing={2}
                            textTransform="uppercase"
                            fontWeight={'normal'}
                            fontSize={'14px'}
                        >
                            <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }} >
                                <Link href='/'>Home</Link>
                            </ListItem >
                            <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }} >
                                <Link href='/#about'>Sobre mim</Link>
                            </ListItem>
                            <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }} >
                                <Link href='/'>Habilidades</Link>
                            </ListItem >
                            <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }}>
                                <Link href='/'>Projetos</Link>
                            </ListItem>
                            <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }}>
                                <Link href='/'>Contato</Link>
                            </ListItem>
                        </List>
                        <DarkModeSwitch />
                    </Flex>
                ) : (
                    <>
                        <Flex gap={5}>
                            <Box as="button" display="flex" alignItems="center" onClick={handleNav}>
                                <HamburgerIcon boxSize={25} />
                            </Box>
                            <DarkModeSwitch />
                        </Flex>
                    </>

                )}
            </Flex>


            {/* Mobile version nav */}

            <Box
                position="fixed"
                left="0"
                top="0"
                w="full"
                h="full"
                bg="blackAlpha.600"
                display={nav ? "block" : "none"}
            >
                <MotionBox
                    position="fixed"
                    left="0"
                    top="0"
                    w={["75%", "60%", "45%"]}
                    h="100vh"
                    bg={bgColor}
                    p={10}
                    initial={{ x: "-100%" }}
                    animate={{ x: nav ? "0%" : "-100%" }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                >
                    <Box>
                        <Flex w="full" alignItems={'center'} justifyContent={'space-between'}  >
                            <Image src={logoGN.src} alt="Logo GustavoNeves" width={170} height={50}/>
                            <IconButton
                                as="button"
                                aria-label="Close"
                                icon={<CloseIcon boxSize={3} />}
                                rounded="full"
                                boxShadow="md"
                                p={3}
                                cursor="pointer"
                                _hover={{ boxShadow: "xl", color: "purpleColor" }}
                                onClick={handleNav}
                            />
                        </Flex>
                        <Text borderBottom={'solid 1px #D2D4D7'} my={4} py={4} >Vamos juntos criar uma solução inovadora!</Text>
                        <Flex >
                            <List flexDir="column" display={'flex'} py={4} my={4} gap={10} style={{ listStyle: 'none' }} textTransform="uppercase">
                                <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }} >
                                    <Link href='/'>Home</Link>
                                </ListItem>
                                <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }} >
                                    <Link href='/'>Sobre mim</Link>
                                </ListItem>
                                <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }} >
                                    <Link href='/'>Habilidades</Link>
                                </ListItem>
                                <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }} >
                                    <Link href='/'>Projetos</Link>
                                </ListItem>
                                <ListItem _hover={{ color: "purpleColor", transition: "ease-in 100ms" }} >
                                    <Link href='/'>Contato</Link>
                                </ListItem>
                            </List>
                        </Flex>
                        <Box>
                            <Text letterSpacing={2} textTransform="uppercase" fontWeight={'normal'} color={"purpleColor"} my={4} py={4} >Entre em contato comigo</Text>
                            <Flex alignItems={'center'} justifyContent={'space-between'} my={4} w="full" width={{ base: "full", sm: "80%" }} flexWrap={{ base: "wrap", md: "nowrap" }}>
                                <IconButton
                                    as="button"
                                    aria-label="Close"
                                    icon={<TiSocialLinkedin />}
                                    rounded="full"
                                    boxShadow="md"
                                    p={3}
                                    cursor="pointer"
                                    _hover={{ boxShadow: "xl", color: "purpleColor" }}
                                />
                                <IconButton
                                    as="button"
                                    aria-label="Close"
                                    icon={<VscGithubInverted />}
                                    rounded="full"
                                    boxShadow="md"
                                    p={3}
                                    cursor="pointer"
                                    _hover={{ boxShadow: "xl", color: "purpleColor" }}
                                />
                                <IconButton
                                    as="button"
                                    aria-label="Close"
                                    icon={<BiLogoGmail />}
                                    rounded="full"
                                    boxShadow="md"
                                    p={3}
                                    cursor="pointer"
                                    _hover={{ boxShadow: "xl", color: "purpleColor" }}
                                />
                                <IconButton
                                    as="button"
                                    aria-label="Close"
                                    icon={<BsInstagram />}
                                    rounded="full"
                                    boxShadow="md"
                                    p={3}
                                    cursor="pointer"
                                    _hover={{ boxShadow: "xl", color: "purpleColor" }}
                                />
                            </Flex>
                        </Box>
                    </Box>
                </MotionBox>
            </Box>
        </Box>
    );
}

export default Navbar;


