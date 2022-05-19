// Vendors
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Masonry from 'react-masonry-css'

// Components
import {
  AspectRatio,
  Box,
  chakra,
  Grid,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Locale } from 'types/locale'
import { Image } from 'types/movies/images'
import { settings } from './settings'
import { Skeleton } from 'components/Skeleton'

// Types
export type MediaGalleryProps = {
  title: {
    [key in Locale]: string
  }
  images: Image[]
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

const NextChakraImage = chakra(NextImage)
const ChakraMasonry = chakra(Masonry)

export const MediaGallery = (props: MediaGalleryProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { title, images } = props
  const { locale } = useRouter()

  const localeTitle = title[locale as Locale]

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [activeImage, setActiveImage] = useState({} as Image)

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */
  const breakpointColumnsObj = {
    default: 3,
    1000: 3,
    600: 2
  }

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
      <VStack spacing={4} w="100%" alignItems="flex-start">
        <HStack>
          <Box h="7" w="2" bgColor="primary.500" />
          <Text fontSize="md" textAlign="justify">
            {localeTitle}
          </Text>
        </HStack>

        <Box w="100%">
          <SimpleReactLightbox>
            <SRLWrapper options={settings}>
              <ChakraMasonry
                breakpointCols={breakpointColumnsObj}
                className="gallery__row"
                columnClassName="gallery__column"
                width="auto"
                display="flex"
                sx={{
                  '.gallery__column': {
                    paddingRight: '16px',
                    backgroundClip: 'padding-box'
                  },
                  '.gallery__column > div': {
                    marginBottom: '16px'
                  }
                }}
              >
                {images.map((image) => {
                  const url = `https://image.tmdb.org/t/p/original/${image.file_path}`

                  return (
                    <AspectRatio
                      ratio={image.aspect_ratio}
                      w="100%"
                      _hover={{
                        filter: 'brightness(1)'
                      }}
                      transition="all 0.2s"
                      filter="brightness(0.5)"
                      cursor="pointer"
                      onClick={() => setActiveImage(image)}
                    >
                      <Box w="100%">
                        <Skeleton w="100%" h="100%" />

                        <NextChakraImage
                          src={url}
                          w="100%"
                          h="100%"
                          layout="fill"
                        />
                      </Box>
                    </AspectRatio>
                  )
                })}
              </ChakraMasonry>
            </SRLWrapper>
          </SimpleReactLightbox>
        </Box>
      </VStack>
    </>
  )
}
