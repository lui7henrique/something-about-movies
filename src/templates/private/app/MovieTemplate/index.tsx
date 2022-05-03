// Vendors
import { useRouter } from 'next/router'
import { intervalToDuration, format } from 'date-fns'
import { currency } from 'utils/currency'

// Components
import {
  AspectRatio,
  Badge,
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
import Image from 'next/image'

// Types
import { Details, Keyword } from 'types/movies/list'
import { enUS, ptBR } from 'date-fns/locale'
import { Locale } from 'types/locale'
import { Cast, Crew } from 'types/movies/credits'

export type MovieTemplateProps = {
  details: Details
  keywords: Keyword[]
  cast: Cast[]
  crew: Crew[]
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/
const ChakraNextImage = chakra(Image)

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
    cast
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

      <Box w="100%">
        <Grid
          gridTemplateColumns={{ base: '1fr', lg: '2fr 5fr' }}
          w="100%"
          maxWidth="1180px"
          margin="0 auto"
          px={4}
          gap={4}
        >
          <Box w="100%">
            <AspectRatio
              ratio={2 / 3}
              w="100%"
              borderRadius="sm"
              marginTop="-96px !important"
            >
              <Image
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={title}
                layout="fill"
                objectFit="cover"
                style={{
                  borderRadius: '3px'
                }}
              />
            </AspectRatio>
          </Box>

          <VStack alignItems="flex-start" spacing={4}>
            <VStack alignItems="flex-start" spacing={4}>
              <HStack>
                <Box h="7" w="2" bgColor="primary.500" />
                <Text fontSize="md" textAlign="justify">
                  Detalhes
                </Text>
              </HStack>
              <Text fontSize="md" textAlign="justify">
                <Text
                  as="span"
                  fontWeight="bold"
                  textTransform="uppercase"
                  opacity={0.3}
                >
                  Sinopse:{' '}
                </Text>
                {overview}
              </Text>

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
                  >
                    Duração:{' '}
                  </Text>
                  {time}
                </Text>

                <Text fontSize="md" textAlign="justify">
                  <Text
                    as="span"
                    fontWeight="bold"
                    textTransform="uppercase"
                    opacity={0.3}
                  >
                    Data de lançamento:{' '}
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
                  >
                    Orçamento:{' '}
                  </Text>
                  {currency(budget, locale as Locale)}
                </Text>

                <Text fontSize="md" textAlign="justify">
                  <Text
                    as="span"
                    fontWeight="bold"
                    textTransform="uppercase"
                    opacity={0.3}
                  >
                    Bilheteria:{' '}
                  </Text>
                  {currency(revenue, locale as Locale)}
                </Text>
              </Stack>
            </VStack>

            <VStack alignItems="flex-start" spacing={4} w="100%">
              <HStack>
                <Box h="7" w="2" bgColor="primary.500" />
                <Text fontSize="md" textAlign="justify">
                  Elenco
                </Text>
              </HStack>

              <Grid templateColumns="repeat(5, 1fr)" w="100%" gap="2">
                {cast.map((person) => {
                  return (
                    <VStack alignItems="flex-start">
                      <AspectRatio ratio={3 / 4} w="100%">
                        <ChakraNextImage
                          src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                          w="100%"
                          h="100%"
                          layout="fill"
                          objectFit="cover"
                        />
                      </AspectRatio>

                      <VStack alignItems="flex-start">
                        <Text fontSize="md" fontWeight="bold">
                          {person.name}
                        </Text>
                        <Text fontSize="sm">{person.character}</Text>
                      </VStack>
                    </VStack>
                  )
                })}
              </Grid>
            </VStack>
          </VStack>
        </Grid>
      </Box>
    </VStack>
  )
}
