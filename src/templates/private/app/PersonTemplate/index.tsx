// Vendors

// Components
import { Box, Flex, Heading } from '@chakra-ui/react'
import { MediaList } from 'layout/Private/components/MediaList'
import { MinimalMedia } from 'types/media'
import { Details, ExternalIds, Images, MovieCredits } from 'types/person'

// Types
type Highlight = MovieCredits['crew'] | MovieCredits['cast']

type Credits = {
  cast: MinimalMedia[]
  crew: MinimalMedia[]
}

type Movies = Credits
type Tv = Credits

export type PersonTemplateProps = {
  details: Details
  movies: Movies
  tv: Tv
  images: Images
  externalIds: ExternalIds
  highlight: Highlight
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const PersonTemplate = (props: PersonTemplateProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { details, movies, tv, images, externalIds, highlight } = props

  const hasMoviesCrew = movies.crew.length > 0
  const hasMoviesCast = movies.cast.length > 0
  const hasTvCrew = tv.crew.length > 0
  const hasTvCast = tv.cast.length > 0

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
      <Flex
        h="60vh"
        alignItems="center"
        justifyContent="center"
        bgColor="gray.1000"
      >
        <Heading>BANNER CARALHO</Heading>
      </Flex>

      {/* Movies  */}
      {hasMoviesCast && (
        <Box as="section" p={4}>
          <MediaList
            title={{
              'en-US': 'Movie acting credits',
              'pt-BR': 'Créditos de atuação em filmes'
            }}
            media={movies.cast}
            type="movie"
          />
        </Box>
      )}

      {hasMoviesCrew && (
        <Box as="section" p={4}>
          <MediaList
            title={{
              'en-US': 'Movie directing credits',
              'pt-BR': 'Créditos em direção de filmes'
            }}
            media={movies.crew}
            type="movie"
          />
        </Box>
      )}

      {/* TV Shows  */}
      {hasMoviesCast && (
        <Box as="section" p={4}>
          <MediaList
            title={{
              'en-US': 'TV acting credits',
              'pt-BR': 'Créditos de atuação em TV'
            }}
            media={tv.cast}
            type="tv"
          />
        </Box>
      )}

      {hasMoviesCrew && (
        <Box as="section" p={4}>
          <MediaList
            title={{
              'en-US': 'TV directing credits',
              'pt-BR': 'Créditos em direção de TV'
            }}
            media={tv.crew}
            type="tv"
          />
        </Box>
      )}
    </Box>
  )
}
