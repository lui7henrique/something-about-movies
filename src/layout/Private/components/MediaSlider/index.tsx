// Vendors
import { useRouter } from 'next/router'
import { Locale } from 'services/api'

// Components
import {
  Box,
  chakra,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

import { supabase } from 'services/supabase'
import { v4 } from 'uuid'
import { Button } from 'components/Button'
import { translations } from './translations'

// Types
export type MediaSlide = {
  id: number
  image: string
  title: string
  description: string
  type: 'movie' | 'tv'
}

export type MediaSliderProps = {
  media: MediaSlide[]
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/
const ChakraSwiper = chakra(Swiper)
const ChakraNextImage = chakra(Image)

export const MediaSlider = (props: MediaSliderProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { media } = props
  const { locale } = useRouter()

  const {
    slide: { type: slideType },
    buttons
  } = translations[locale as Locale]

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
    <ChakraSwiper
      slidesPerView={1}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      w="100%"
      h="100%"
      sx={{
        'span.swiper-pagination-bullet': {
          backgroundColor: 'primary.700',
          opacity: 0.7,
          width: '2rem',
          height: '0.5rem',
          borderRadius: '0px'
        },
        'span.swiper-pagination-bullet-active': {
          backgroundColor: 'primary.500'
        }
      }}
      zIndex={1}
    >
      {media.map((item) => {
        const { id, image, title, description, type: mediaType } = item

        return (
          <SwiperSlide
            key={item.id}
            style={{
              position: 'relative'
            }}
          >
            <Flex w="100%" h="100%" position="relative">
              <ChakraNextImage
                src={item.image}
                alt={v4()}
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
                  <Text fontSize="lg">{slideType[mediaType]}</Text>
                </HStack>
                <Heading fontSize="5xl">{title}</Heading>
                <Text
                  fontSize="lg"
                  textAlign="justify"
                  noOfLines={4}
                  lineHeight={8}
                >
                  {description}
                </Text>

                <HStack>
                  <Button
                    label={buttons.details}
                    href={`/${item.type === 'movie' ? 'movies' : 'tv'}/${
                      item.id
                    }`}
                  />
                  <Button label={buttons.watchlist} />
                </HStack>
              </VStack>
            </Flex>
          </SwiperSlide>
        )
      })}
    </ChakraSwiper>
  )
}
