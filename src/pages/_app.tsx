import * as React from 'react'
import NextProgress from 'next-progress'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '../styles/theme'
import { useRouter } from 'next/router'

import { AuthContextProvider } from 'contexts/auth'
import { AppProvider } from 'contexts'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { asPath, push } = useRouter()

  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      duration: 250
    })

    const locale = localStorage.getItem('locale')

    if (locale) {
      push(asPath, asPath, { locale: locale })
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <NextProgress
        delay={300}
        options={{ showSpinner: true }}
        color="#ca2b5f"
        height={5}
      />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  )
}

export default MyApp
