// Vendors
import { Header } from 'components/Header'

// Components
import { Box, Heading, VStack } from '@chakra-ui/react'
import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'

import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Limiter } from 'components/Limiter'

// Types
export type HomeTemplateProps = {
  movies: Movie[]
  tv: TV[]
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const HomeTemplate = (props: HomeTemplateProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { movies, tv } = props
  const { locale } = useRouter()

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
  const featuredMedia = useMemo(
    () =>
      [...movies, ...tv].map((item) => {
        const title = (item as any).title || (item as any).name

        return {
          id: item.id,
          image: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
          title: title,
          description: item.overview
        }
      }),
    [locale]
  )

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <Box>
      <VStack spacing={6}>
        <Limiter as="section" d="flex" justifyContent="center" h="100vh">
          <Heading>Vantagens</Heading>
        </Limiter>

        <Limiter as="section" d="flex" justifyContent="center" h="100vh">
          <Heading>Vantagens</Heading>
        </Limiter>

        <Limiter as="section" d="flex" justifyContent="center" h="100vh">
          <Heading>Tecnologias</Heading>
        </Limiter>

        <Limiter as="section" d="flex" justifyContent="center" h="100vh">
          <Heading>Contribuidores</Heading>
        </Limiter>
      </VStack>
    </Box>
  )
}
