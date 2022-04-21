// Vendors
import { ButtonBack } from 'components/ButtonBack'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Components
import { Box, chakra, Flex, Grid } from '@chakra-ui/react'
import { v4 } from 'uuid'

// Types
export type Media = {
  id: number
  image: string
}

type LayoutAccountProps = {
  children: React.ReactNode
  featuredMedia: Media[]
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

export const LayoutAccount = (props: LayoutAccountProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { children, featuredMedia } = props

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
    <Grid
      gridTemplateColumns={{
        base: '1fr',
        lg: '4fr 3fr'
      }}
      w="100vw"
      minH="100vh"
      gap={4}
    >
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
        display={{
          base: 'none',
          lg: 'block'
        }}
        sx={{
          'span.swiper-pagination-bullet': {
            backgroundColor: 'primary.700',
            opacity: 0.7,
            width: '3rem',
            height: '0.5rem',
            borderRadius: '0px'
          },
          'span.swiper-pagination-bullet-active': {
            backgroundColor: 'primary.500'
          }
        }}
      >
        {featuredMedia.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              style={{
                position: 'relative'
              }}
            >
              <ChakraNextImage
                src={item.image}
                alt={v4()}
                layout="fill"
                objectFit="cover"
                filter="brightness(0.8)"
                opacity={0.7}
              />
            </SwiperSlide>
          )
        })}
      </ChakraSwiper>

      <Box position="absolute" top={4} left={4} w="4">
        <ButtonBack />
      </Box>

      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        {children}
      </Flex>
    </Grid>
  )
}
