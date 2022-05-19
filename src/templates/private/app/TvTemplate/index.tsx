// Vendors
import { useRouter } from 'next/router'

// Components
import {
  AspectRatio,
  Badge,
  Box,
  chakra,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  useToken,
  VStack
} from '@chakra-ui/react'
import { Banner } from 'components/Banner'
import { MediaDetails } from 'components/MediaDetails'

// Types
import { Details } from 'types/tv/list'
import { format, intervalToDuration } from 'date-fns'
import { enUS, ptBR } from 'date-fns/locale'
import { currency } from 'utils/currency'
import { Locale } from 'types/locale'
import Image from 'next/image'
import { MediaGallery } from 'components/MediaGallery'
import { Images } from 'types/tv/image'
import { sortBy } from 'lodash'

export type TvTemplateProps = {
  details: Details
  images: Images
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

const NextChakraImage = chakra(Image)

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
      vote_count,
      poster_path,
      episode_run_time,
      first_air_date,
      last_air_date,
      in_production,
      created_by
    },
    images
  } = props

  const { locale } = useRouter()

  const releaseDate = format(
    new Date(first_air_date),
    locale === 'pt-BR' ? "dd 'de' MMMM 'de' yyyy" : 'MMMM dd, yyyy.',
    {
      locale: locale === 'pt-BR' ? ptBR : enUS
    }
  )

  const endDate = format(
    new Date(last_air_date),
    locale === 'pt-BR' ? "dd 'de' MMMM 'de' yyyy" : 'MMMM dd, yyyy.',
    {
      locale: locale === 'pt-BR' ? ptBR : enUS
    }
  )

  const allImages = [...images.backdrops, ...images.posters]

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
    <VStack alignItems="flex-start" spacing={8}>
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

      <MediaDetails
        poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
        title={name}
        sections={[
          {
            title: locale === 'pt-BR' ? 'Detalhes' : 'Details',
            items: [
              {
                title: locale === 'pt-BR' ? 'Sinopse' : 'overview',
                value: overview
              },
              {
                title:
                  locale === 'pt-BR'
                    ? 'Duração média dos episódios'
                    : 'Episode run time',
                value: `${episode_run_time[0].toLocaleString(locale)} min`
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
                          {locale === 'pt-BR'
                            ? 'Data de lançamento'
                            : 'Release date'}
                          :
                        </Text>
                        {releaseDate}
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
                            ? 'Data de encerramento'
                            : 'End date'}
                          :
                        </Text>
                        {in_production ? (
                          <Badge bgColor="primary.500" color="white">
                            {locale === 'pt-BR'
                              ? 'Em produção'
                              : 'In production'}
                          </Badge>
                        ) : (
                          endDate
                        )}
                      </Text>
                    </Stack>
                  </VStack>
                )
              }
            ]
          }
          // {
          //   title: locale === 'pt-BR' ? 'Criador por:' : 'Created by:',
          //   items: [
          //     {
          //       custom: (
          //         <HStack spacing={4}>
          //           {created_by
          //             .filter((creator) => creator.profile_path)
          //             .map((creator) => {
          //               return (
          //                 <VStack spacing={2} key={creator.id}>
          //                   <AspectRatio
          //                     ratio={1}
          //                     w="80px"
          //                     position="relative"
          //                     overflow="hidden"
          //                   >
          //                     <NextChakraImage
          //                       src={`https://image.tmdb.org/t/p/original/${creator.profile_path}`}
          //                       w="100%"
          //                       h="100%"
          //                       layout="fill"
          //                       objectFit="cover"
          //                       objectPosition="center"
          //                       alt={creator.name}
          //                     />
          //                   </AspectRatio>
          //                   <Heading as="h3" fontSize="md" fontWeight="bold">
          //                     {creator.name}
          //                   </Heading>
          //                 </VStack>
          //               )
          //             })}
          //         </HStack>
          //       )
          //     }
          //   ]
          // }
        ]}
      />

      <Box as="section" w="100%">
        <Box maxW="1180px" m="0 auto" px={4}>
          <MediaGallery
            title={{
              'pt-BR': 'Images',
              'en-US': 'Imagens'
            }}
            images={sortBy(allImages, (image) => image.vote_count).reverse()}
          />
        </Box>
      </Box>
    </VStack>
  )
}
