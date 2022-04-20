import * as React from 'react'
import NextProgress from 'next-progress'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      duration: 250
    })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <NextProgress
        delay={300}
        options={{ showSpinner: true }}
        color="#04BF8A"
      />

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
