// Vendors

// Components
import {
  Box,
  Flex,
  Grid,
  GridProps,
  HStack,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { TotalByGenre } from 'pages'
import { Locale } from 'services/api'
import { GenreItem } from '../GenreItem'

import { translation } from './translation'

// Types
export type GenreListProps = {
  title: {
    'pt-BR': string
    'en-US': string
  }
  list: TotalByGenre[]
  hasAnimation?: boolean
  gridProps?: GridProps
  type: 'movies' | 'tv'
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const GenreList = (props: GenreListProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { title, list, hasAnimation = false, gridProps, type } = props

  const { locale } = useRouter()
  const localeTitle = title[locale as Locale]

  const qtd = useBreakpointValue({ base: 6, lg: list.length })

  const totalLessShowing = list.length - qtd!

  const totalGenre = list
    .slice(qtd, qtd! + list.length)
    .reduce((acc, value) => {
      console.log(value)

      return acc + value.total
    }, 0)

  const { text } = translation(totalLessShowing, totalGenre)[locale as Locale]

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
    <Box as="section" w="100%">
      {hasAnimation ? (
        <HStack data-aos="fade-right" data-aos-delay="100" mb={4}>
          <Box h="7" w="2" bgColor="primary.500" />
          <Text fontSize="lg">{localeTitle}</Text>
        </HStack>
      ) : (
        <HStack mb={4}>
          <Box h="7" w="2" bgColor="primary.500" />
          <Text fontSize="lg">{localeTitle}</Text>
        </HStack>
      )}

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gap={4}
        {...gridProps}
      >
        {list.slice(0, qtd).map((item, index) => {
          const delay = index * 100

          return hasAnimation ? (
            <Box data-aos="fade-up" data-aos-delay={delay}>
              <GenreItem
                {...item}
                key={item.id}
                title={localeTitle}
                delay={delay / 1000}
                type={type}
              />
            </Box>
          ) : (
            <GenreItem
              {...item}
              key={item.id}
              title={localeTitle}
              delay={delay / 1000}
              type={type}
            />
          )
        })}
      </Grid>

      {list.length > qtd! &&
        (hasAnimation ? (
          <Flex
            justifyContent="center"
            alignItems="center"
            mt={4}
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <Text fontSize="lg" mr={2}>
              {text}
            </Text>
          </Flex>
        ) : (
          <Flex justifyContent="center" alignItems="center" mt={4}>
            <Text fontSize="lg" mr={2}>
              {text}
            </Text>
          </Flex>
        ))}
    </Box>
  )
}
