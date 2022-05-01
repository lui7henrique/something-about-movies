// Vendors

// Components
import {
  Badge,
  Box,
  chakra,
  Flex,
  Heading,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Button } from 'components/Button'
import Image from 'next/image'
import { FaList, FaPlay } from 'react-icons/fa'
import { IoMdPlay } from 'react-icons/io'

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
        <Heading>{details.title}</Heading>

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

          <HStack>
            {details.genres.map((genre) => {
              return (
                <Badge bgColor="primary.500" color="white">
                  {genre.name}
                </Badge>
              )
            })}
          </HStack>

          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            textAlign="justify"
            lineHeight={8}
            noOfLines={5}
          >
            {details.overview}
          </Text>

          <HStack>
            <Button label="Add to watchlist" leftIcon={<FaList />} />
            <Button label="Trailer" leftIcon={<IoMdPlay />} variant="outline" />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  )
}
