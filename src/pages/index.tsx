import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Heading,
  Box,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { DarkModeSwitch } from '../components/DarkModeSwitch'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Main } from '../components/Main'
import { About } from '../components/About'
import { BackToTheTop } from '../components/BackToTheTop'
import { ParticlesDesign } from '../components/ParticlesDesign'
import { ScrollDown } from '../components/ScrollDown'
import { Skills } from '../components/Skills'

const Index = () => (
  <>
    <Head>
      <title>Gustavo Neves | Front-End Developer</title>
    </Head>
    <Navbar />
    <ParticlesDesign />
    <BackToTheTop />
    <Main />
    <About />
    <Skills />

  </>
)

export default Index
