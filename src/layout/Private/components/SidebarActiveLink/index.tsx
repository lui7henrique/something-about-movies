// Vendors
import Link from 'next/link'

// Components
import { HStack, Text, useTheme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IconType } from 'react-icons/lib'
import { useSidebar } from 'contexts/sidebar'

// Types
export type SidebarActiveLinkProps = {
  href: string
  label: string
  icon: IconType
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const SidebarActiveLink = (props: SidebarActiveLinkProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { href, label, icon: Icon } = props
  const { asPath } = useRouter()

  const {
    colors: { primary }
  } = useTheme()

  const { isMinimized } = useSidebar()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const isActive = href === '/app' ? asPath === href : asPath.startsWith(href)

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
    <Link key={href} href={href} passHref>
      <HStack
        as="a"
        w="100%"
        px={4}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          width: 5,
          height: 5,
          position: 'absolute',
          right: -3,
          backgroundColor: 'primary.500',
          borderRadius: 'sm',
          transform: isActive ? 'scale(1)' : 'scale(0)',
          transformOrigin: 'left',
          transition: 'all 0.2s'
        }}
        _hover={{
          '&:before': {
            transform: 'scale(1)'
          },
          color: 'white'
        }}
        transition="all 0.2s"
        alignItems="center"
        cursor="pointer"
        spacing={4}
        color={isActive ? 'gray.50' : 'gray.400'}
      >
        {Icon && (
          <Icon
            size={20}
            color={isActive && primary[500]}
            style={{
              transition: 'all 0.2s',
              marginLeft: isMinimized ? 8 : 0
            }}
          />
        )}

        <Text
          mr="4"
          fontSize="sm"
          fontWeight="bold"
          display={isMinimized ? 'none' : 'block'}
          transition="all 0.2s"
          whiteSpace="nowrap"
        >
          {label}
        </Text>
      </HStack>
    </Link>
  )
}
