// Vendors

// Components
import {
  Badge,
  Box,
  chakra,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Button } from 'components/Button'
import { useWatchList } from 'contexts/watchList'
import { useVotes } from 'hooks/useVotes'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaList, FaPlay } from 'react-icons/fa'
import { IoMdPlay } from 'react-icons/io'
import { Locale } from 'types/locale'

// Types
import { Details } from 'types/movies/list'

export type MovieTemplateProps = {
  details: Details
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
  const { details } = props

  const { isLoading, handleAddToWatchList } = useWatchList()
  const { handleRenderVotes } = useVotes()

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
      <Box
        as="section"
        h={{ base: '100vh', lg: '80vh' }}
        position="relative"
        w="100%"
      >
        <ChakraNextImage
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          alt={details.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          filter="brightness(0.15)"
          w="100%"
          h="100%"
        />

        <VStack
          position="absolute"
          w={{ base: '100%', md: '40%' }}
          h="100%"
          alignItems="flex-start"
          justifyContent="center"
          px={{ base: 4, lg: 8 }}
        >
          <HStack>
            <Box h="7" w="2" bgColor="primary.500" />
            <Text
              fontSize="md"
              textAlign="justify"
              noOfLines={4}
              lineHeight={8}
            >
              {details.tagline}
            </Text>
          </HStack>

          <Heading fontSize={{ base: '3xl', lg: '5xl' }}>
            {details.title}
          </Heading>

          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: 2, lg: 4 }}
            divider={<Box w="1px" h="100%" />}
          >
            <HStack>
              {details.genres.map((genre) => {
                return (
                  <Badge bgColor="primary.500" color="white">
                    {genre.name}
                  </Badge>
                )
              })}
            </HStack>

            {handleRenderVotes(
              details.vote_average,
              details.vote_count,
              locale as Locale
            )}
          </Stack>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            textAlign="justify"
            lineHeight={8}
            noOfLines={5}
          >
            {details.overview}
          </Text>

          <HStack>
            <Button
              label="Add to watchlist"
              leftIcon={<FaList />}
              onClick={() => handleAddToWatchList(details.id)}
              isLoading={isLoading}
            />
            <Button label="Trailer" leftIcon={<IoMdPlay />} variant="outline" />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  )
}
