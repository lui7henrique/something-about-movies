// Vendors

// Components
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Limiter } from 'components/Limiter'

import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { BsPerson } from 'react-icons/bs'
import { IoMdPerson } from 'react-icons/io'
import { MdLocalMovies, MdPerson, MdTv } from 'react-icons/md'
import { RiClapperboardLine } from 'react-icons/ri'
import { Locale } from 'types/locale'
import { translations } from './translation'

// Types

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const SectionCount = () => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { locale } = useRouter()
  const { movies, people, tv } = translations[locale as Locale]

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

  const numbers = useMemo(
    () => [
      {
        ...movies,
        icon: RiClapperboardLine
      },
      {
        ...tv,
        icon: MdTv
      },
      {
        ...people,
        icon: BsPerson
      }
    ],
    [locale]
  )

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <Box w="100%" bg="gray.1000" borderBottom="1px solid #191919">
      <Limiter
        as="section"
        w="100%"
        py={14}
        d="flex"
        justifyContent="space-between"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Heading as="h3" fontSize={24}>
          Confira os números do Cineapp <br /> e faça parte você também!
        </Heading>

        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={10}
          mt={{ base: '4', lg: '0' }}
        >
          {numbers.map((number) => {
            const { label, value, icon: Icon } = number

            return (
              <HStack spacing={6}>
                <Flex
                  p={4}
                  align="center"
                  justifyContent="center"
                  border="1px solid #191919"
                  borderRadius="16px"
                >
                  <Icon color="white" size={24} />
                </Flex>

                <VStack alignItems="flex-start" spacing={4}>
                  <Heading color="white" fontSize="24px">
                    {value}
                  </Heading>
                  <Text as="sup" fontSize={18}>
                    {label}
                  </Text>
                </VStack>
              </HStack>
            )
          })}
        </Stack>
      </Limiter>
    </Box>
  )
}
