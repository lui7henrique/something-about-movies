// Vendors
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

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
  console.log(`https://image.tmdb.org/t/p/original/${activeImage.file_path}`)

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
        <HStack px={4}>
          <Box h="7" w="2" bgColor="primary.500" />
          <Text fontSize="md" textAlign="justify">
            {localeTitle}
          </Text>
        </HStack>

        <Box w="100%">
          <SimpleReactLightbox>
            <SRLWrapper options={settings}>
              <Grid templateColumns="repeat(5, 1fr)" w="100%" gap={2}>
                {images.slice(0, 10).map((image) => {
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
                      <NextChakraImage
                        src={url}
                        w="100%"
                        h="100%"
                        layout="fill"
                      />
                    </AspectRatio>
                  )
                })}
              </Grid>
            </SRLWrapper>
          </SimpleReactLightbox>
        </Box>
      </VStack>
    </>
  )
}
