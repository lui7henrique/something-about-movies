// Vendors

// Components
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  useTheme,
  VStack
} from '@chakra-ui/react'
import { TotalByGenre } from 'pages'
import { icons } from 'utils/genre'

import CountUp from 'react-countup'
import { useRouter } from 'next/router'

// Types
export type GenreItemProps = TotalByGenre & {
  title: string
  delay: number // in seconds
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const GenreItem = (props: GenreItemProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { id, name, total, title, delay } = props

  const Icon = icons[id]

  const {
    colors: { primary }
  } = useTheme()
  const { locale } = useRouter()

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
  |˝
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
    <Box
      _after={{
        content: '""',
        display: 'block',
        backgroundColor: primary[500],
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
        backgroundColor: primary[500],
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
        '> div': {
          transform: 'translate(6px, -6px)'
        },
        '&:before': {
          transform: 'rotate(-45deg) scale(1)'
        },
        '&:after': {
          transform: 'rotate(45deg) scale(1)'
        }
      }}
      position="relative"
      backgroundColor="primary.500"
      borderRadius="sm"
    >
      <HStack
        w="100%"
        backgroundColor="gray.800"
        p={4}
        spacing={4}
        transition="all 0.2s ease-in-out"
        _hover={{
          filter: 'brightness(110%)'
        }}
        zIndex={5}
      >
        <Flex p={2} bgColor="gray.700" borderRadius="md">
          {Icon && <Icon size={32} color={primary[500]} />}
        </Flex>
        <VStack
          w="100%"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={0}
        >
          <Heading as="h5" fontSize="xl" noOfLines={1}>
            {name}
          </Heading>

          <Text fontSize="md" d="flex">
            <CountUp
              end={total}
              duration={5}
              delay={delay}
              formattingFn={(num) => num.toLocaleString(locale)}
            />
            <Text>+ {title.toLowerCase()}</Text>
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}
