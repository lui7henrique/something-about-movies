// Vendors

// Components
import { Box, Heading, useTheme } from '@chakra-ui/react'
import Link from 'next/link'

// Types

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Logo = () => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const theme = useTheme()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <Link href="/">
      <a>
        <Heading
          as="h1"
          fontSize="3xl"
          bg="gradient.basic"
          sx={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          // data-aos="fade-right"
          // data-aos-duration="300"
        >
          cineapp
        </Heading>
      </a>
    </Link>
  )
}
