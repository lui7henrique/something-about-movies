// Vendors
import { useRouter } from 'next/router'
import { Suspense } from 'react'

// Components
import {
  Heading,
  VStack,
  Image,
  Divider,
  Stack,
  IconButton
} from '@chakra-ui/react'
import { SidebarActiveLink } from 'layout/Private/components/SidebarActiveLink'
import { Button } from 'components/Button'

import { supabase } from 'services/supabase'

import { CgArrowsBreakeH, CgLogOut } from 'react-icons/cg'

import { translations } from './translations'
import { useAuth } from 'contexts/auth'

// Types
import { Locale } from 'types/locale'
import { useSidebar } from 'contexts/sidebar'
import { MdCompareArrows } from 'react-icons/md'

export type SidebarProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Sidebar = (props: SidebarProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const user = supabase.auth.user()
  const { logout } = useAuth()
  const { locale } = useRouter()

  const {
    sidebar: { nav, sign_out }
  } = translations(user?.id ?? '')[locale as Locale]

  const { isMinimized, handleToggleSidebar } = useSidebar()

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
    <VStack
      bgColor="gray.800"
      height="100vh"
      w={{ base: '100%', lg: isMinimized ? '70px' : '250px' }}
      alignItems="flex-start"
      justifyContent="space-between"
      spacing={2}
      position="relative"
      transition="all 0.2s"
    >
      <IconButton
        position="absolute"
        right={isMinimized ? -3 : -3}
        top={6}
        aria-label="toggle-sidebar"
        zIndex={900000}
        size="10px"
        variant="outline"
        borderRadius="sm"
        onClick={handleToggleSidebar}
        icon={<MdCompareArrows size={20} />}
        transition="all 0.2s"
      />

      <VStack w="100%">
        <Stack
          direction="row"
          py={2}
          px={4}
          alignItems="flex-end"
          w="100%"
          spacing={2}
        >
          {user && (
            <>
              <Image
                src={`https://ui-avatars.com/api/?name=${user.user_metadata.username}&background=ca2b5f&color=fffffb&bold=true`}
                layout="fill"
                borderRadius="sm"
                w="10"
                h="10"
              />

              <VStack
                spacing={0}
                alignItems="flex-start"
                display={isMinimized ? 'none' : 'flex'}
              >
                <Heading as="h4" fontSize="12px" fontWeight="semibold">
                  {locale === 'pt-BR' ? 'Bem-vindo' : 'Welcome'}
                </Heading>
                <Heading as="h3" size="md" fontWeight="bold">
                  {user.user_metadata.username}
                </Heading>
              </VStack>
            </>
          )}
        </Stack>

        <VStack
          w="100%"
          alignItems="flex-start"
          spacing={4}
          divider={<Divider />}
        >
          {nav.map((item) => {
            return (
              <VStack w="100%" alignItems="flex-start" spacing={2}>
                <Heading
                  as="h3"
                  fontSize="xs"
                  textTransform="uppercase"
                  color="gray.400"
                  alignItems="flex-start"
                  px={4}
                >
                  {item.title}
                </Heading>
                <VStack w="100%" spacing={4}>
                  {item.links.map((link) => {
                    return <SidebarActiveLink {...link} key={link.href} />
                  })}
                </VStack>
              </VStack>
            )
          })}
        </VStack>
      </VStack>

      <Button
        label={isMinimized ? '' : sign_out.label}
        w="100%"
        variant="ghost"
        leftIcon={<CgLogOut />}
        onClick={logout}
      />
    </VStack>
  )
}
