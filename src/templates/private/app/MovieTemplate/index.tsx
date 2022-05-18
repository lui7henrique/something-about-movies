// Vendors
import { useRouter } from 'next/router'
import { intervalToDuration, format } from 'date-fns'
import { currency } from 'utils/currency'

// Components
import {
  AspectRatio,
  Box,
  chakra,
  Flex,
  Grid,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Banner } from 'components/Banner'

// Types
import { Details, Keyword } from 'types/movies/list'
import { enUS, ptBR } from 'date-fns/locale'
import { Locale } from 'types/locale'
import { Cast, Crew } from 'types/movies/credits'
import { MediaDetails } from 'components/MediaDetails'

import { Images } from 'types/movies/images'
import Image from 'next/image'
import { MediaGallery } from 'components/MediaGallery'
import { sortBy } from 'lodash'

export type MovieTemplateProps = {
  details: Details
  keywords: Keyword[]
  cast: Cast[]
  crew: Crew[]
  images: Images
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const MovieTemplate = (props: MovieTemplateProps) => {
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
      title,
      tagline,
      overview,
      backdrop_path,
      poster_path,
      genres,
      vote_average,
      vote_count,
      runtime,
      release_date,
      budget,
      revenue
    },
    images
  } = props

  const { locale } = useRouter()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */

  const { hours, minutes } = intervalToDuration({
    start: 0,
    end: runtime * 60 * 1000
  })

  const time = `${hours}h ${minutes}m`

  const releaseDate = format(
    new Date(release_date),
    locale === 'pt-BR' ? "dd 'de' MMMM 'de' yyyy" : 'MMMM dd, yyyy.',
    {
      locale: locale === 'pt-BR' ? ptBR : enUS
    }
  )

  const allImages = [...images.backdrops, ...images.posters]

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
    <VStack alignItems="flex-start" spacing={8}>
      <Banner
        id={id}
        title={title}
        subtitle={tagline}
        description={overview}
        image={backdrop_path}
        genres={genres}
        vote_average={vote_average}
        vote_count={vote_count}
        type="movie"
      />

      <MediaDetails
        poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
        title={title}
        sections={[
          {
            title: locale === 'pt-BR' ? 'Detalhes' : 'Details',
            items: [
              {
                title: locale === 'pt-BR' ? 'Sinopse' : 'overview',
                value: overview
              },
              {
                custom: (
                  <VStack alignItems="flex-start" spacing={4}>
                    <Stack
                      direction={{ base: 'column', lg: 'row' }}
                      divider={<Box w="1px" h="100%" />}
                    >
                      <Text fontSize="md" textAlign="justify">
                        <Text
                          as="span"
                          fontWeight="bold"
                          textTransform="uppercase"
                          opacity={0.3}
                          mr={1}
                        >
                          {locale === 'pt-BR' ? 'Duração' : 'Duration'}:
                        </Text>
                        {time}
                      </Text>

                      <Text fontSize="md" textAlign="justify">
                        <Text
                          as="span"
                          fontWeight="bold"
                          textTransform="uppercase"
                          opacity={0.3}
                          mr={1}
                        >
                          {locale === 'pt-BR'
                            ? 'Data de lançamento'
                            : 'Release date'}
                          :
                        </Text>
                        {releaseDate}
                      </Text>
                    </Stack>

                    <Stack
                      direction={{ base: 'column', lg: 'row' }}
                      divider={<Box w="1px" h="100%" />}
                    >
                      <Text fontSize="md" textAlign="justify">
                        <Text
                          as="span"
                          fontWeight="bold"
                          textTransform="uppercase"
                          opacity={0.3}
                          mr={1}
                        >
                          {locale === 'pt-BR' ? 'Orçamento' : 'Budget'}:
                        </Text>
                        {currency(budget, locale as Locale)}
                      </Text>

                      <Text fontSize="md" textAlign="justify">
                        <Text
                          as="span"
                          fontWeight="bold"
                          textTransform="uppercase"
                          opacity={0.3}
                          mr={1}
                        >
                          {locale === 'pt-BR' ? 'Receita' : 'Revenue'}:
                        </Text>
                        {currency(revenue, locale as Locale)}
                      </Text>
                    </Stack>
                  </VStack>
                )
              }
            ]
          }
        ]}
      />

      <Box as="section" w="100%">
        <Box maxW="1180px" m="0 auto" px={4}>
          <MediaGallery
            title={{
              'pt-BR': 'Plano de fundos',
              'en-US': 'Wallpappers'
            }}
            images={sortBy(allImages, (image) => image.vote_count).reverse()}
          />
        </Box>
      </Box>

      {/* <Box as="section" w="100%">
        <MediaGallery
          title={{
            'pt-BR': 'Posters',
            'en-US': 'Posters'
          }}
          images={images.posters}
        />
      </Box> */}
    </VStack>
  )
}
