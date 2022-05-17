// Vendors
import { useRouter } from 'next/router'

// Components
import {
  AspectRatio,
  Box,
  chakra,
  Grid,
  Heading,
  HStack,
  Text,
  useTheme,
  VStack
} from '@chakra-ui/react'
import Image from 'next/image'
import { MinimalPeople, Title } from './types'
import { useState } from 'react'
import { Locale } from 'types/locale'
import Link from 'next/link'
import { Skeleton } from 'components/Skeleton'
import { translations } from './translations'
import { Button } from 'components/Button'

// Types
export type PeopleListProps = {
  people: MinimalPeople[]
  title: Title
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/
const DEFAULT_SHOW = 8

const ChakraNextImage = chakra(Image)

export const PeopleList = (props: PeopleListProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { people, title } = props

  const { locale } = useRouter()
  const {
    colors: { primary }
  } = useTheme()

  const hasMore = people.length > DEFAULT_SHOW
  const templateColumns = {
    base: 'repeat(2, 1fr)',
    lg: 'repeat(4, 1fr)',
    xl: 'repeat(6, 1fr)',
    '2xl': 'repeat(8, 1fr)'
  }

  const localeTitle = title[locale as Locale]
  const {
    button: { showLess, showMore }
  } = translations[locale as Locale]

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [show, setShow] = useState(DEFAULT_SHOW)
  const [loadedItems, setLoadedItems] = useState(people.map((_) => false))

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

      <Grid gridTemplateColumns={templateColumns} w="100%" gap={4}>
        {people.slice(0, show).map((person, index) => {
          const linkUrl = `/app/person/${person.id}`
          const isLoaded = loadedItems[index]

          return (
            <Link href={linkUrl}>
              <a>
                <VStack
                  alignItems="flex-start"
                  spacing={2}
                  w="100%"
                  key={person.id}
                >
                  <AspectRatio
                    w="100%"
                    ratio={1 / 1.5}
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
                        src={person.image}
                        alt={`{media.title}`}
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
                    </Box>
                  </AspectRatio>

                  <VStack alignItems="flex-start">
                    <Heading as="h3" fontSize="sm" noOfLines={1}>
                      {person.name}
                    </Heading>
                  </VStack>
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
            label={show === people.length ? showLess : showMore}
            variant="ghost"
            w="15%"
            onClick={() =>
              show === people.length
                ? setShow(DEFAULT_SHOW)
                : setShow(people.length)
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
    </VStack>
  )
}
