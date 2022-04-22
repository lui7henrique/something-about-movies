// Vendors

// Components
import {
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  keyframes,
  Text,
  useBreakpointValue,
  useTheme
} from '@chakra-ui/react'
import { Limiter } from 'components/Limiter'
import { useRouter } from 'next/router'
import { TotalByGenre } from 'pages'
import { Locale } from 'services/api'
import { GenreItem } from '../GenreItem'

import { BiChevronUp } from 'react-icons/bi'
import { useState } from 'react'
import { translation } from './translation'
import { text } from 'stream/consumers'

// Types
export type GenreListProps = {
  title: {
    'pt-BR': string
    'en-US': string
  }
  list: TotalByGenre[]
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
  const { title, list } = props

  const { locale } = useRouter()
  const localeTitle = title[locale as Locale]
  const { text } = translation[locale as Locale]

  const qtd = useBreakpointValue({ base: 6, lg: list.length })

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
    <Limiter
      minH={{
        base: 'auto',
        lg: '100vh'
      }}
      py={{ base: 4, lg: 0 }}
      as="section"
    >
      <Heading mb={4} data-aos="fade-right" data-aos-delay="100">
        {localeTitle}
      </Heading>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gap={4}
      >
        {list.slice(0, qtd).map((item, index) => {
          const delay = index * 100

          return (
            <Box data-aos="fade-up" data-aos-delay={delay}>
              <GenreItem {...item} key={item.id} title={localeTitle} />
            </Box>
          )
        })}
      </Grid>

      {list.length > qtd! && (
        <Flex
          justifyContent="center"
          alignItems="center"
          mt={4}
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <Text fontSize="lg" mr={2}>
            {text[1]} {list.length - qtd!}
            {text[2]}{' '}
            {list
              .slice(qtd, qtd! + list.length)
              .reduce((acc, item) => acc + item.total, 0)
              .toLocaleString(locale)}{' '}
            {localeTitle.toLowerCase()}.
          </Text>
        </Flex>
      )}
    </Limiter>
  )
}
