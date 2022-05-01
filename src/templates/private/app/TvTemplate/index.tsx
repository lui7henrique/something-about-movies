// Vendors

// Components
import { VStack } from '@chakra-ui/react'
import { Banner } from 'components/Banner'
import { Details } from 'types/tv/list'

// Types

export type TvTemplateProps = {
  details: Details
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const TvTemplate = (props: TvTemplateProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    details: {
      id,
      name,
      tagline,
      overview,
      backdrop_path,
      genres,
      vote_average,
      vote_count
    }
  } = props

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
    <VStack alignItems="flex-start">
      <Banner
        id={id}
        title={name}
        subtitle={tagline}
        description={overview}
        image={backdrop_path}
        genres={genres}
        vote_average={vote_average}
        vote_count={vote_count}
        type="movie"
      />
    </VStack>
  )
}
