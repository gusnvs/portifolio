import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Heading,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Main } from '../components/Main'

const Index = () => (
  <>
    <Head>
      <title>Gustavo Neves | Front-End Developer</title>
    </Head>
    {/* <DarkModeSwitch /> */}

    <Navbar />
    <Main />
  </>
)

export default Index
