// Vendors

// Components

import { Box } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  BannerSlide,
  BannerSlider
} from 'layout/Private/components/BannerSlider'
import { MinimalMedia } from 'types/media'
import { MediaList } from 'layout/Private/components/MediaList'

// Types
export type AppHomeTemplateProps = {
  banners: BannerSlide[]
  popularMovies: MinimalMedia[]
  topRatedMovies: MinimalMedia[]
  popularTV: MinimalMedia[]
  topRatedTV: MinimalMedia[]
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
  const { banners, popularMovies, topRatedMovies, popularTV, topRatedTV } =
    props

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
            'en-US': 'Popular Movies',
            'pt-BR': 'Filmes Populares'
          }}
          media={popularMovies}
          type="movie"
        />
      </Box>

      <Box as="section" p={4}>
        <MediaList
          title={{
            'en-US': 'Popular TV Shows',
            'pt-BR': 'Séries Populares'
          }}
          media={popularTV}
          type="tv"
        />
      </Box>

      <Box as="section" p={4}>
        <MediaList
          title={{
            'en-US': 'Top Rated Movies',
            'pt-BR': 'Filmes Mais Votados'
          }}
          media={topRatedMovies}
          type="tv"
          poster
        />
      </Box>

      <Box as="section" p={5}>
        <MediaList
          title={{
            'en-US': 'Top Rated TV Shows',
            'pt-BR': 'Séries Mais Votadas'
          }}
          media={topRatedTV}
          type="tv"
          poster
        />
      </Box>
    </Box>
  )
}
