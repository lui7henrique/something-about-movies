import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: {
      gray: {
        50: '#fff',
        100: '#ededed',
        400: '#a1a1aa',
        500: '#4a4a4a',
        600: '#3f3f46',
        700: '#28272b',
        800: '#212024',
        900: '#141620',
        950: '#08070b80',
        1000: '#000000'
      },
      primary: {
        500: '#ca2b5f',
        600: '#9c1f49',
        700: '#4a0d20',
        800: '#2b0712',
        900: '#1c040b'
      },
      secondary: {
        500: '#a440b8',
        600: '#6a0f7c',
        700: '#3d0a4e',
        800: '#321238',
        900: '#1f0e2c'
      },
      gradient: {
        basic: 'linear-gradient(to right, #ca2b5f, #a440b8)'
      }
    },
    styles: {
      global: {
        body: {
          background: '#08070b',
          color: '#9ca5ad'
          // color: '#ededed',
        },
        html: {
          scrollBehavior: 'smooth',
          'body::-webkit-scrollbar': {
            width: '5px'
          },
          'body::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          'body::-webkit-scrollbar-thumb': {
            backgroundColor: '#ca2b5f',
            borderRadius: '1px',
            border: '3px solid var(--primary)'
          }
        },
        'h1, h2, h3, h4, h5, h6': {
          color: '#ffff'
        },
        '*, *::before, *::after': {
          borderColor: '#2B2B2B'
        }
      }
    },
    fonts: {
      body: 'Space Grotesk, sans-serif'
      //body: 'Josefin Sans, sans-serif'
    }
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)
