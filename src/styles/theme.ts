import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps
} from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: {
      gray: {
        50: '#fff',
        100: '#ededed',
        200: '#8795A1',
        700: '#28272b',
        800: '#212024',
        900: '#08070b',
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
      }
    },
    styles: {
      global: {
        body: {
          bg: '#08070b',
          color: '#ededed'
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
    }
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)
