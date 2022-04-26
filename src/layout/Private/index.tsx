// Vendors

// Components
import {
  Box,
  Flex,
  Grid,
  HStack,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'
import { ButtonBack } from 'components/ButtonBack'
import { ButtonLanguage } from 'components/ButtonLanguage'
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
      <Grid
        gridTemplateColumns={{
          base: '1fr',
          lg: '250px 7fr'
        }}
      >
        <Box
          w="100%"
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
            <HStack>
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
            </HStack>

            <ButtonLanguage />
          </Flex>

          {children}
        </Box>
      </Grid>

      <SidebarDrawer onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
    </>
  )
}
