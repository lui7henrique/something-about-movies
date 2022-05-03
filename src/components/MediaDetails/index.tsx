// Vendors

// Components
import { AspectRatio, Box, Grid, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { ReactNode, useCallback } from 'react'

// Types
export type MediaDetailsProps = {
  poster: string
  title: string
  sections: BaseSectionProps[]
}

type BaseSectionProps = {
  title: string
  items: Array<
    | {
        title?: string
        value: string | ReactNode
      }
    | { custom: ReactNode }
  >
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const MediaDetails = (props: MediaDetailsProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { poster, title, sections } = props

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
  const BaseSection = useCallback((props: BaseSectionProps) => {
    const { title, items } = props

    return (
      <>
        <HStack>
          <Box h="7" w="2" bgColor="primary.500" />
          <Text fontSize="md" textAlign="justify">
            {title}
          </Text>
        </HStack>

        {items.map((item) => {
          if ('custom' in item) {
            return item.custom
          }

          const { title, value } = item

          if (typeof value === 'string') {
            return (
              <Text fontSize="md" textAlign="justify">
                <Text
                  as="span"
                  fontWeight="bold"
                  textTransform="uppercase"
                  opacity={0.3}
                  mr={1}
                >
                  {title}:
                </Text>
                {value}
              </Text>
            )
          }

          return value
        })}
      </>
    )
  }, [])

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
      <Grid
        gridTemplateColumns={{ base: '1fr', lg: '2fr 5fr' }}
        w="100%"
        maxW="1180px"
        m="0 auto"
        px={4}
        gap={4}
      >
        <Box w="100%">
          <AspectRatio
            ratio={2 / 3}
            w="100%"
            borderRadius="sm"
            marginTop="-96px !important"
          >
            <Image
              src={poster}
              alt={title}
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: '3px'
              }}
            />
          </AspectRatio>
        </Box>

        <VStack w="100%" spacing={4} alignItems="flex-start">
          {sections.map((section) => {
            return <BaseSection {...section} />
          })}
        </VStack>
      </Grid>
    </Box>
  )
}
