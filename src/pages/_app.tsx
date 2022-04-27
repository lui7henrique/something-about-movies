import * as React from 'react'
import NextProgress from 'next-progress'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '../styles/theme'
import { useRouter } from 'next/router'

import { AuthContextProvider } from 'contexts/auth'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { asPath, push, locale } = useRouter()

  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      duration: 250
    })

    const storageLocale = localStorage.getItem('locale')

    if (locale === storageLocale) {
      push(asPath, asPath, { locale: locale })
    }

    if (locale !== storageLocale) {
      localStorage.setItem('locale', locale!)
      push(asPath, asPath, { locale: storageLocale! })
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <NextProgress
        delay={300}
        options={{ showSpinner: true }}
        color="#ca2b5f"
      />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
