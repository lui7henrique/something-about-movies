// Vendors

// Components
import { Box, Flex, HStack, IconButton, useDisclosure } from '@chakra-ui/react'
import { ButtonBack } from 'components/ButtonBack'
import { ButtonLanguage } from 'components/ButtonLanguage'
import { Search } from 'layout/Private/components/Search'

import { Sidebar } from 'layout/Private/components/Sidebar'

import { IoMdMenu } from 'react-icons/io'
import { SidebarDrawer } from './components/SidebarDrawer'

// Types
type LayoutPrivateProps = {
  children?: React.ReactNode
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const LayoutPrivate = (props: LayoutPrivateProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { children } = props

  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <>
      <Flex position="relative" w="100%">
        <Box
          display={{
            base: 'none',
            lg: 'block'
          }}
        >
          <Sidebar />
        </Box>

        <Box overflow="auto" w="100%" h="100vh" position="relative">
          <Flex
            w="100%"
            justifyContent="space-between"
            position="absolute"
            top={0}
            py={4}
            px={{ base: 4, lg: 8 }}
            zIndex={25}
          >
            <IconButton
              aria-label="open-menu"
              icon={<IoMdMenu />}
              borderRadius="sm"
              onClick={onOpen}
              display={{
                base: 'flex',
                lg: 'none'
              }}
            />

            <ButtonBack
              display={{
                base: 'none',
                lg: 'flex'
              }}
            />

            <HStack>
              <Search />
              <ButtonLanguage />
            </HStack>
          </Flex>

          {children}
        </Box>
      </Flex>

      <SidebarDrawer onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
    </>
  )
}
