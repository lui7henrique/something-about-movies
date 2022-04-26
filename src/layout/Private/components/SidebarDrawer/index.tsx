// Vendors

// Components
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay
} from '@chakra-ui/react'
import { Sidebar } from '../Sidebar'

// Types
export type SidebarDrawerProps = {
  onClose: () => void
  onOpen: () => void
  isOpen: boolean
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const SidebarDrawer = (props: SidebarDrawerProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { onClose, onOpen, isOpen } = props

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
    <Drawer onClose={onClose} isOpen={isOpen} placement="left">
      <DrawerOverlay />
      <DrawerContent size="sm">
        <DrawerCloseButton onClick={onClose} />
        <Sidebar />
      </DrawerContent>
    </Drawer>
  )
}