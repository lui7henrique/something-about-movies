// Vendors
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useCallback, useState } from 'react'

// Components
import { Circle, Flex, Stack, chakra } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/navigation'
import { SliderItem, SliderItemProps } from '../SliderItem'

// Types
export type SliderProps = {
  items: Array<SliderItemProps>
}

type SwiperManager = {
  swiper: SwiperCore
  activeIndex: number
}

const ChakraSwiper = chakra(Swiper)

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Slider = (props: SliderProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { items } = props

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [manager, setManager] = useState<SwiperManager>({} as SwiperManager)

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */
  const handleChangeSlide = useCallback(
    (index: number) => {
      manager.swiper.slideTo(index)

      setManager({
        ...manager,
        activeIndex: index
      })
    },
    [manager]
  )

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
    <Flex direction="column" alignItems="center">
      <ChakraSwiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        className="mySwiper"
        onAfterInit={(s) =>
          setManager({
            swiper: s,
            activeIndex: 0
          })
        }
        onSlideChange={(s) =>
          setManager({ ...manager, activeIndex: s.activeIndex })
        }
        autoplay={{
          delay: 7500,
          disableOnInteraction: false
        }}
        width="100%"
      >
        {items.map((item) => {
          console.log(item)

          return (
            <SwiperSlide key={item.id}>
              <SliderItem {...item} />
            </SwiperSlide>
          )
        })}
      </ChakraSwiper>

      <Stack
        direction="row"
        zIndex={99999}
        className="custom-swiper-pagination"
        pl={{ base: 0, md: 4 }}
        py={{ base: 4, md: 0 }}
      >
        {items.map((item, index) => {
          const isActive = manager.activeIndex === index

          return (
            <Circle
              w={{ base: '5px', md: '9px' }}
              h={{ base: '5px', md: '9px' }}
              key={item.id}
              cursor="pointer"
              onClick={() => handleChangeSlide(index)}
              bgColor={isActive ? 'primary.500' : 'gray.500'}
              opacity={isActive ? 1 : 0.5}
            />
          )
        })}
      </Stack>
    </Flex>
  )
}
