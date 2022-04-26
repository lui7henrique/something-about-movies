// Vendors
import Image from 'next/image'
import { useRouter } from 'next/router'

// Components

import { Box, chakra } from '@chakra-ui/react'
import { AppPageProps } from 'pages/app'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { v4 } from 'uuid'
import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'
import { MediaSlider } from 'layout/Private/components/MediaSlider'

// Types
export type AppTemplateProps = AppPageProps

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const AppTemplate = (props: AppTemplateProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { popularMovies, popularTV } = props
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
  const media = [...popularMovies, ...popularTV].map((item) => {
    const title = (item as Movie).title || (item as TV).name
    const type = (item as Movie).title ? 'movie' : 'tv'

    return {
      id: item.id,
      image: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
      title: title as string,
      description: item.overview,
      type: type as 'movie' | 'tv'
    }
  })

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
      <Box h="80vh" w="100%">
        <MediaSlider media={media} />
      </Box>
    </Box>
  )
}
