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
  Text,
  useTheme,
  VStack
} from '@chakra-ui/react'
import { MinimalMedia } from 'types/media'
import { Locale } from 'types/locale'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from 'components/Button'
import { translations } from './translations'

import Link from 'next/link'
import { Skeleton } from 'components/Skeleton'

// Types
export type MediaListProps = {
  media: MinimalMedia[]
  title?: {
    'en-US': string
    'pt-BR': string
  }
  type: 'movie' | 'tv'
  poster?: boolean
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/
const ChakraNextImage = chakra(Image)

export const MediaList = (props: MediaListProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { media, title, type, poster } = props

  const { locale } = useRouter()
  const localeTitle = title ? title[locale as Locale] : ''
  const {
    button: { showLess, showMore }
  } = translations[locale as Locale]

  const {
    colors: { primary }
  } = useTheme()

  const hasMore = media.length > 5

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [showItems, setShowItems] = useState(poster ? 8 : 5)
  const [loadedItems, setLoadedItems] = useState(media.map((_) => false))

  const templateColumns = poster
    ? {
        base: 'repeat(1, 1fr)',
        lg: 'repeat(4, 1fr)',
        xl: 'repeat(6, 1fr)',
        '2xl': 'repeat(8, 1fr)'
      }
    : {
        base: 'repeat(1, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
        '2xl': 'repeat(5, 1fr)'
      }

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
      {title && (
        <HStack>
          <Box h="7" w="2" bgColor="primary.500" />
          <Text fontSize="lg">{localeTitle}</Text>
        </HStack>
      )}

      <Grid gridTemplateColumns={templateColumns} w="100%" gap={4}>
        {media.slice(0, showItems).map((media, index) => {
          const linkUrl = `/app/${type === 'movie' ? 'movies' : 'tv'}/${
            media.id
          }`

          const isLoaded = loadedItems[index]

          return (
            <Link href={linkUrl}>
              <a>
                <VStack
                  alignItems="flex-start"
                  spacing={2}
                  w="100%"
                  key={media.id}
                >
                  <AspectRatio
                    w="100%"
                    ratio={poster ? 1 / 1.5 : 16 / 9}
                    overflow="unset"
                    sx={{
                      span: {
                        overflow: 'unset !important'
                      }
                    }}
                  >
                    <Box
                      w="100%"
                      h="100%"
                      position="relative"
                      overflow="unset !important"
                      _after={{
                        content: '""',
                        display: 'block',
                        backgroundColor: isLoaded
                          ? primary[500]
                          : 'transparent',
                        width: '8px',
                        height: '8px',
                        position: 'absolute',
                        transition: 'all .15s ease',
                        right: 0,
                        bottom: 0,
                        transformOrigin: 'bottom right',
                        transform: 'rotate(45deg) scale(0)',
                        zIndex: -1
                      }}
                      _before={{
                        content: '""',
                        display: 'block',
                        backgroundColor: isLoaded
                          ? primary[500]
                          : 'transparent',
                        width: '8px',
                        height: '8px',
                        position: 'absolute',
                        transition: 'all .15s ease',
                        top: 0,
                        left: 0,
                        transformOrigin: 'top left',
                        transform: 'rotate(-45deg) scale(0)',
                        zIndex: -1
                      }}
                      _hover={{
                        img: {
                          transform: isLoaded
                            ? 'translate(6px, -6px)'
                            : 'translate(0, 0)',
                          filter: isLoaded ? 'brightness(1)' : 'brightness(1)'
                        },
                        div: {
                          transform: isLoaded
                            ? 'translate(6px, -6px)'
                            : 'translate(0, 0)'
                        },
                        '&:before': {
                          transform: isLoaded
                            ? 'rotate(-45deg) scale(1)'
                            : 'rotate(0deg) scale(0)'
                        },
                        '&:after': {
                          transform: isLoaded
                            ? 'rotate(45deg) scale(1)'
                            : 'rotate(0deg) scale(0)'
                        }
                      }}
                      bgColor={isLoaded ? primary[500] : 'transparent'}
                    >
                      {!isLoaded && <Skeleton w="100%" h="100%" />}
                      <ChakraNextImage
                        src={media.image}
                        alt={media.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        w="100%"
                        h="100%"
                        quality={25}
                        transition="all 0.2s"
                        onLoadingComplete={() =>
                          setLoadedItems((prevItems) => {
                            const newItems = [...prevItems]
                            newItems[index] = true
                            return newItems
                          })
                        }
                        filter="brightness(0.6)"
                      />

                      <HStack
                        w="100%"
                        flexWrap="wrap"
                        position="absolute"
                        bottom={2}
                        left={2}
                        transition="all 0.2s"
                      >
                        {media.genres.slice(0, 1).map((genre) => {
                          return (
                            <Badge
                              key={genre.id}
                              bgColor="primary.500"
                              color="white"
                            >
                              {genre.name}
                            </Badge>
                          )
                        })}
                      </HStack>
                    </Box>
                  </AspectRatio>
                  {!poster && (
                    <VStack alignItems="flex-start">
                      <Heading as="h3" fontSize="sm" noOfLines={1}>
                        {media.title}
                      </Heading>
                      <Text fontSize="sm" noOfLines={2}>
                        {media.description}
                      </Text>
                    </VStack>
                  )}
                </VStack>
              </a>
            </Link>
          )
        })}
      </Grid>

      {hasMore && (
        <HStack w="100%" alignItems="center" spacing={8}>
          <Box w="90%" h="1px" bgColor="gray.900" />

          <Button
            label={showItems === media.length ? showLess : showMore}
            variant="ghost"
            w="15%"
            onClick={() =>
              showItems === media.length
                ? setShowItems(poster ? 8 : 5)
                : setShowItems(media.length)
            }
            outline="none"
            boxShadow="none"
            _focus={{
              boxShadow: 'none'
            }}
          />

          <Box w="90%" h="1px" bgColor="gray.900" />
        </HStack>
      )}

      {!hasMore && <Box w="100%" h="1px" bgColor="gray.900" />}
    </VStack>
  )
}
