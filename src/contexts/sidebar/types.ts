import { ReactNode } from 'react'

export type SidebarType = {
  isMinimized: boolean
  handleToggleSidebar: () => void
}

export type SidebarProviderProps = {
  children: ReactNode
}
