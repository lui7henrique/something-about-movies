// Vendors
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useWatchList } from 'contexts/watchList'
import { useVotes } from 'hooks/useVotes'

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

import { FaList } from 'react-icons/fa'
import { IoMdPlay } from 'react-icons/io'

import { Button } from 'components/Button'
import { Genre } from 'types/genres/genres'
import { Locale } from 'types/locale'
import { Skeleton } from 'components/Skeleton'
import { translations } from './translations'
import { Video } from 'types/videos'
import { usePlayer } from 'contexts/player'
import { Player } from 'components/Player'

// Types
export type BannerProps = {
  id: number
  title: string
  subtitle: string
  image: string
  genres: Genre[]
  vote_average: number
  vote_count: number
  description: string
  type: 'movie' | 'tv'
  trailer?: Video
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

const ChakraNextImage = chakra(Image)

export const Banner = (props: BannerProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    id,
    title,
    subtitle,
    image,
    genres,
    vote_average,
    vote_count,
    description,
    trailer
  } = props

  const { isLoading, handleAddToWatchList } = useWatchList()
  const { handleRenderVotes } = useVotes()
  const { locale } = useRouter()
  const { openPlayer } = usePlayer()

  const { addToWatchList, watchTrailer } = translations[locale as Locale]

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
      <Box
        as="section"
        h={{ base: '100vh', lg: '85vh' }}
        position="relative"
        w="100%"
      >
        <ChakraNextImage
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          filter="brightness(0.15)"
          w="100%"
          h="100%"
        />
        <Skeleton w="100%" h="100%" zIndex={-1} position="absolute" />

        <VStack
          position="absolute"
          w={{ base: '100%', md: '40%' }}
          h="100%"
          alignItems="flex-start"
          justifyContent="center"
          px={{ base: 4, lg: 8 }}
          zIndex={1}
        >
          {subtitle && (
            <HStack>
              <Box h="7" w="2" bgColor="primary.500" />
              <Text fontSize="md" textAlign="justify">
                {subtitle}
              </Text>
            </HStack>
          )}

          <Heading fontSize={{ base: '3xl', lg: '5xl' }}>{title}</Heading>

          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: 2, lg: 4 }}
            divider={<Box w="1px" h="100%" />}
          >
            <HStack>
              {genres.map((genre) => {
                return (
                  <Badge bgColor="primary.500" color="white">
                    {genre.name}
                  </Badge>
                )
              })}
            </HStack>

            {handleRenderVotes(vote_average, vote_count, locale as Locale)}
          </Stack>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            textAlign="justify"
            lineHeight={8}
            noOfLines={3}
          >
            {description}
          </Text>

          <HStack>
            <Button
              label={addToWatchList}
              leftIcon={<FaList />}
              onClick={() => handleAddToWatchList(id)}
              isLoading={isLoading}
            />
            {trailer && (
              <Button
                label={watchTrailer}
                leftIcon={<IoMdPlay />}
                variant="outline"
                onClick={() =>
                  openPlayer(`https://www.youtube.com/watch?v=${trailer.key}`)
                }
              />
            )}
          </HStack>
        </VStack>
      </Box>
    </>
  )
}
