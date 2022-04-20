import * as React from 'react'
import NextProgress from 'next-progress'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '../styles/theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { AuthContextProvider } from '../context/AuthContext'
import { ProductsContextProvider } from '../context/ProductsContext'
import { UploadContextProvider } from '../context/UploadContext'
import { CartContextProvider } from '../context/CartContext'

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
      <AuthContextProvider>
        <ProductsContextProvider>
          <UploadContextProvider>
            <CartContextProvider>
              <CSSReset />
              <NextProgress
                delay={300}
                options={{ showSpinner: true }}
                color="#04BF8A"
              />
              <Header />
              <Component {...pageProps} />
              <Footer />
            </CartContextProvider>
          </UploadContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
