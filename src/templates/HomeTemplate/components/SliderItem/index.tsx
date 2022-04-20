// Vendors

// Components
import {
  AspectRatio,
  Box,
  Heading,
  Skeleton,
  Text,
  VStack
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { Button } from 'components/Button'

// Types
export type SliderItemProps = {
  id: number
  image: string
  title: string
  description: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const SliderItem = (props: SliderItemProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { id, image, title, description } = props
  const { push } = useRouter()

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
    <Link href={`/products/${id}`} passHref>
      <AspectRatio ratio={16 / 9} cursor="pointer">
        <Box w="100%" position="relative">
          <Skeleton
            w="100%"
            startColor="gray.800"
            endColor="gray.900"
            fadeDuration={0.6}
          />

          <Box
            background="linear-gradient(180deg, #000000d8 10%, #ffffff53 100%);"
            w="100%"
            h="100%"
            position="absolute"
            top={0}
            zIndex={5}
          />

          <Box
            as="figure"
            sx={{
              img: {
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }
            }}
          >
            <Image src={image} layout="fill" alt={`${title} thumbnail`} />
          </Box>

          <Box
            backgroundColor="#000000B3"
            position="absolute"
            bottom={0}
            borderRadius="sm"
            width="100%"
          >
            <VStack
              maxWidth="1280"
              mx="auto"
              align="flex-start"
              spacing={4}
              p={4}
            >
              <Heading as="h2" fontSize={{ base: 24, lg: 28 }}>
                {title}
              </Heading>
              <Text fontSize={{ base: 14, lg: 20 }} noOfLines={3}>
                {description}
              </Text>

              <Button
                label="Saiba mais"
                onClick={() => push(`/products/${id}`)}
              />
            </VStack>
          </Box>
        </Box>
      </AspectRatio>
    </Link>
  )
}
