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
import { Locale } from 'services/api'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from 'components/Button'
import { translations } from './translations'
import Link from 'next/link'
import { MdArrowUpward, MdChevronRight } from 'react-icons/md'
import { BiDownArrow } from 'react-icons/bi'

// Types
export type MediaListProps = {
  media: MinimalMedia[]
  title: {
    'en-US': string
    'pt-BR': string
  }
  type: 'movie' | 'tv'
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
  const { media, title, type } = props

  const { locale } = useRouter()
  const localeTitle = title[locale as Locale]
  const {
    button: { showLess, showMore }
  } = translations[locale as Locale]

  const {
    colors: { primary }
  } = useTheme()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [showItems, setShowItems] = useState(5)

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
      <HStack>
        <Box h="7" w="2" bgColor="primary.500" />
        <Text fontSize="lg">{localeTitle}</Text>
      </HStack>

      <Grid
        gridTemplateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
          '2xl': 'repeat(5, 1fr)'
        }}
        w="100%"
        gap={4}
      >
        {media.slice(0, showItems).map((media) => {
          const linkUrl = `/${type}/${media.id}`

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
                    ratio={16 / 9}
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
                        backgroundColor: primary[500],
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
                        backgroundColor: primary[500],
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
                          transform: 'translate(6px, -6px)'
                        },
                        div: {
                          transform: 'translate(6px, -6px)'
                        },
                        '&:before': {
                          transform: 'rotate(-45deg) scale(1)'
                        },
                        '&:after': {
                          transform: 'rotate(45deg) scale(1)'
                        }
                      }}
                      backgroundColor="primary.500"
                    >
                      <ChakraNextImage
                        src={media.image}
                        alt={`{media.title}`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        w="100%"
                        h="100%"
                        quality={25}
                        transition="all 0.2s"
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
                  <VStack alignItems="flex-start">
                    <Heading as="h3" fontSize="sm">
                      {media.title}
                    </Heading>
                    <Text fontSize="sm" noOfLines={2}>
                      {media.description}
                    </Text>
                  </VStack>
                </VStack>
              </a>
            </Link>
          )
        })}
      </Grid>

      <HStack w="100%" alignItems="center" spacing={8}>
        <Box w="90%" h="2px" bgColor="gray.800" />
        <Button
          label={showItems === media.length ? showLess : showMore}
          variant="ghost"
          w="15%"
          onClick={() =>
            showItems === media.length
              ? setShowItems(5)
              : setShowItems(media.length)
          }
          outline="none"
          boxShadow="none"
          _focus={{
            boxShadow: 'none'
          }}
        />
        <Box w="90%" h="2px" bgColor="gray.800" />
      </HStack>
    </VStack>
  )
}
