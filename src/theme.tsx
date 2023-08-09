import { extendTheme } from '@chakra-ui/react'
import { defineStyle, StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const ButtonStyle = defineStyle({
  variants: {
    redButton: {
      bg: 'red.500',
      color: 'white',
      _hover: { bg: 'red.400' },
      _active: { bg: 'red.600' },
      _dark: {
        bg: '#FF3F4B',
        _hover: { bg: '#CF3841' },
        _active: { bg: '#911A21' },
      }
    },
    greenButton: {
      bg: 'green.500',
      color: 'white',
      _hover: { bg: 'green.600' },
      _active: { bg: 'green.700' },
      _dark: {
        bg: 'green.400',
        _hover: { bg: 'green.600' },
        _active: { bg: 'green.700' },
      }
    },
    blueButton: {
      bg: '#5271FF',
      color: 'white',
      _hover: { bg: '#5f7bfa' },
      _active: { bg: '#344dbf' },
    }
  }
})

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('#1F2937', 'whiteAlpha.900')(props),
        bg: mode('#ECF0F3', 'gray.700')(props),
      },
    }),
  },
  semanticTokens: {
    colors: {
      ofColor: '#FF680B',
      purpleColor: "#5651E5",
      text: {
        default: 'gray.600',
        _dark: 'gray.400'
      },
      primary: {
        default: 'red',
        _dark: 'blue',
      },
      background: {
        default: 'white',
        _dark: 'gray.800'
      }
    },
    fonts,
    breakpoints,
    components: {
      Button: {
        greenButton: {
          bg: 'green.500',
          color: 'white',
          _hover: { bg: 'green.600' },
          _active: { bg: 'green.700' },
          _dark: {
            bg: 'green.400',
            _hover: { bg: 'green.600' },
            _active: { bg: 'green.700' },
          }
        },
      }
    }
  }
})

export default theme