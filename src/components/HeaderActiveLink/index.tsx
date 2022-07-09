// Vendors
import Link from 'next/link'

// Components
import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

// Types
export type HeaderActiveLinkProps = {
  href: string
  label: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const HeaderActiveLink = (props: HeaderActiveLinkProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { href, label } = props

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { asPath } = useRouter()
  const isActive = href === '/' ? asPath === href : asPath.startsWith(href)

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
    <Link key={href} href={href}>
      <a>
        <Text
          size="sm"
          mr="4"
          color={isActive ? 'gray.50' : 'gray.100'}
          transition="color 0.2s"
          _after={{
            display: 'block',
            content: '""',
            width: isActive ? '100%' : '0',
            height: '3px',
            backgroundColor: isActive ? 'gray.700' : 'gray.800',
            transition: '0.2s ease-in-out',
            borderRadius: '0px'
          }}
          _hover={{
            color: 'gray.50',
            _after: {
              width: '100%'
            }
          }}
        >
          {label}
        </Text>
      </a>
    </Link>
  )
}
