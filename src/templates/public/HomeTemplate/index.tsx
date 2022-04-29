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
    <>
      <Hero />

      <Limiter as="section" d="flex" justifyContent="center" h="100vh">
        <GenreList
          title={{
            'en-US': 'Movies by genres',
            'pt-BR': 'Filmes por gêneros'
          }}
          list={moviesTotalByGenre}
          type="movies"
        >
      </Limiter>

      <Limiter as="section" d="flex" justifyContent="center" h="100vh">
        <GenreList
          title={{
            'en-US': 'Series by genres',
            'pt-BR': 'Séries por gêneros'
          }}
          list={tvTotalByGenre}
          type="tv"
        />
      </Limiter>

      <Limiter as="section" d="flex" justifyContent="center" h="100vh">
        <Heading>Tecnologias</Heading>
      </Limiter>
      <Limiter as="section" d="flex" justifyContent="center" h="100vh">
        <Heading>Contribuidores</Heading>
      </Limiter>
    </>
  )
}
