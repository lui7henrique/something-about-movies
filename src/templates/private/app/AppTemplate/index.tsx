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
  movies: MinimalMedia[]
  tv: MinimalMedia[]
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
  const { banners, movies, tv } = props

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
      <Box h="80vh" w="100%" as="section">
        <BannerSlider banners={banners} />
      </Box>

      <Box as="section" p={4}>
        <MediaList
          title={{
            'en-US': 'Movies we think you’ll like',
            'pt-BR': 'Filmes que achamos que você vai gostar'
          }}
          media={movies}
        />
      </Box>

      <Box as="section" p={4}>
        <MediaList
          title={{
            'en-US': 'Series we think you’ll like',
            'pt-BR': 'Séries que achamos que você vai curtir'
          }}
          media={tv}
        />
      </Box>
    </Box>
  )
}
