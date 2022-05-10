// Vendors

// Components
import { Box, Flex, Heading, VStack } from '@chakra-ui/react'
import { MediaList } from 'layout/Private/components/MediaList'
import { useRouter } from 'next/router'
import { MinimalMedia } from 'types/media'

// Types
import { Person } from 'types/person'

export type SearchTemplateProps = {
  movies: MinimalMedia[]
  tv: MinimalMedia[]
  people: Person[]
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const SearchTemplate = (props: SearchTemplateProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { movies, tv, people } = props

  const { locale, query } = useRouter()

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
      <VStack
        px={{ base: 4, lg: 8 }}
        py={{ base: 4, lg: 8 }}
        spacing={4}
        alignItems="flex-start"
        mt={16}
      >
        {!!movies.length && (
          <Box as="section">
            <MediaList
              title={{
                'en-US': 'Movies',
                'pt-BR': 'Filmes'
              }}
              media={movies}
              type="movie"
            />
          </Box>
        )}

        {!!tv.length && (
          <Box as="section">
            <MediaList
              title={{
                'en-US': 'Series',
                'pt-BR': 'Séries'
              }}
              media={tv}
              type="tv"
            />
          </Box>
        )}
      </VStack>
    </>
  )
}
