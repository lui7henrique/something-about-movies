// Vendors
import { Header } from 'components/Header'

// Components
import { Box, Heading, VStack } from '@chakra-ui/react'
import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'

import { useRouter } from 'next/router'
import { Limiter } from 'components/Limiter'
import { Hero } from './components/Hero'
import { TotalByGenre } from 'pages'
import { GenreList } from './components/GenreList'

// Types
export type HomeTemplateProps = {
  movies: Movie[]
  tv: TV[]
  moviesTotalByGenre: TotalByGenre[]
  tvTotalByGenre: TotalByGenre[]
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
  const { movies, tv, moviesTotalByGenre, tvTotalByGenre } = props
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
  // const featuredMedia = useMemo(
  //   () =>
  //     [...movies, ...tv].map((item) => {
  //       const title = (item as any).title || (item as any).name

  //       return {
  //         id: item.id,
  //         image: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
  //         title: title,
  //         description: item.overview
  //       }
  //     }),
  //   [locale]
  // )

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <>
      <Hero />

      <GenreList
        title={{
          'en-US': 'Movies',
          'pt-BR': 'Filmes'
        }}
        list={moviesTotalByGenre}
      />

      <GenreList
        title={{
          'en-US': 'Series',
          'pt-BR': 'Séries'
        }}
        list={tvTotalByGenre}
      />

      <Limiter as="section" d="flex" justifyContent="center" h="100vh">
        <Heading>Tecnologias</Heading>
      </Limiter>

      <Limiter as="section" d="flex" justifyContent="center" h="100vh">
        <Heading>Contribuidores</Heading>
      </Limiter>
    </>
  )
}
