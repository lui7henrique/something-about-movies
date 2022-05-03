// Vendors
import Link from 'next/link'
import Image from 'next/image'

// Components
import {
  AspectRatio,
  chakra,
  Text,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import { Cast, Crew } from 'types/movies/credits'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

// Types
export type PersonSliderProps = {
  items: Array<Cast | Crew>
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

export const PersonSlider = (props: PersonSliderProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { items } = props

  const sliderPerView = useBreakpointValue({
    base: 2,
    md: 4,
    '2xl': 6
  })

  const aspectRatio = useBreakpointValue({
    base: 1 / 1,
    md: 2 / 1,
    '2xl': 3 / 1
  })

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
    <AspectRatio ratio={aspectRatio} w="100%">
      <ChakraSwiper
        h="100%"
        w="100%"
        slidesPerView={sliderPerView}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={true}
        sx={{
          'div.swiper-button-prev, div.swiper-button-next': {
            top: '42%',
            color: 'primary.600',
            width: '32px',
            height: '32px',
            backgroundColor: '#08070bE6',
            borderRadius: '50%',
            '&:after': {
              fontSize: '12px'
            }
          },
          'div.swiper-button-prev': {
            left: '1'
          },
          'div.swiper-button-next': {
            right: '1'
          }
        }}
      >
        {items.map((person) => {
          return (
            <SwiperSlide
              key={person.id}
              style={{
                position: 'relative'
              }}
            >
              <Link href={`/person/${person.id}`}>
                <a>
                  <VStack alignItems="flex-start" w="100%" h="100%">
                    <AspectRatio ratio={3 / 4} w="100%" position="relative">
                      <ChakraNextImage
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        w="100%"
                        h="100%"
                        layout="fill"
                        objectFit="cover"
                        borderRadius="sm"
                      />
                    </AspectRatio>

                    <VStack alignItems="flex-start">
                      <Text fontSize="md" fontWeight="bold" nOfLines={1}>
                        {person.name}
                      </Text>
                      <Text fontSize="sm" nOfLines={1}>
                        {(person as any).caracter
                          ? (person as any).caracter
                          : person.name}
                      </Text>
                    </VStack>
                  </VStack>
                </a>
              </Link>
            </SwiperSlide>
          )
        })}
      </ChakraSwiper>
    </AspectRatio>
  )
}
