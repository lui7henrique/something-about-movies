// Vendors

// Components

import { Box, Divider } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  BannerSlide,
  BannerSlider
} from 'layout/Private/components/BannerSlider'
import { MinimalMedia } from 'types/media'
import { MediaList } from 'layout/Private/components/MediaList'
import { TotalByGenre } from 'pages'
import { GenreList } from 'templates/public/HomeTemplate/components/GenreList'

// Types
export type AppHomeTemplateProps = {
  banners: BannerSlide[]
  movies: MinimalMedia[]
  tv: MinimalMedia[]
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

export const AppHomeTemplate = (props: AppHomeTemplateProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { banners, movies, tv, moviesTotalByGenre, tvTotalByGenre } = props

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
    <Box>
      <Box h="85vh" w="100%" as="section">
        <BannerSlider banners={banners} />
      </Box>

      <Box as="section" p={4}>
        <MediaList
          title={{
            'en-US': 'Movies we think you’ll like',
            'pt-BR': 'Filmes que achamos que você vai gostar'
          }}
          media={movies}
          type="movie"
        />
      </Box>

      <Box as="section" p={4}>
        <MediaList
          title={{
            'en-US': 'Series we think you’ll like',
            'pt-BR': 'Séries que achamos que você vai curtir'
          }}
          media={tv}
          type="tv"
        />
      </Box>

      <Box as="section" p={4}>
        <GenreList
          title={{
            'en-US': 'Movies by genres',
            'pt-BR': 'Filmes por gêneros'
          }}
          list={moviesTotalByGenre}
          gridProps={{
            gridTemplateColumns: {
              base: '1fr',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(5, 1fr)'
            }
          }}
          type="movies"
        />
      </Box>

      <Box as="section" p={5}>
        <GenreList
          title={{
            'en-US': 'Series by genre',
            'pt-BR': 'Séries por gêneros'
          }}
          list={tvTotalByGenre}
          gridProps={{
            gridTemplateColumns: {
              base: '1fr',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(5, 1fr)'
            }
          }}
          type="tv"
        />
      </Box>
    </Box>
  )
}
