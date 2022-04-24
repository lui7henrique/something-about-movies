// Vendors
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Locale } from 'services/api'

// Components
import { Box, chakra, Heading, HStack, VStack } from '@chakra-ui/react'
import { SidebarActiveLink } from 'layout/Private/components/SidebarActiveLink'

import { supabase } from 'services/supabase'

import { Button } from 'components/Button'

import { CgLogOut } from 'react-icons/cg'

import { translations } from './translations'
import { useAuth } from 'contexts/auth'

// Types
export type SidebarProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/
const ChakraNextImage = chakra(Image)

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
  } = translations[locale as Locale]

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
      w="100%"
      alignItems="flex-start"
      justifyContent="space-between"
      spacing={2}
    >
      <VStack w="100%">
        {user && (
          <HStack p={4} alignItems="flex-end" w="100%" spacing={2}>
            <Box
              w="10"
              h="10"
              borderRadius="sm"
              overflow="hidden"
              position="relative"
            >
              <ChakraNextImage
                src={`https://ui-avatars.com/api/?name=${user.user_metadata.username}&background=ca2b5f&color=fffffb&bold=true`}
                layout="fill"
                borderRadius="sm"
              />
            </Box>

            <VStack spacing={0} alignItems="flex-start">
              <Heading as="h4" fontSize="12px" fontWeight="semibold">
                Bem-vindo
              </Heading>
              <Heading as="h3" size="md" fontWeight="bold">
                {user.user_metadata.username}
              </Heading>
            </VStack>
          </HStack>
        )}

        <VStack w="100%" alignItems="flex-start" spacing={2}>
          <Heading
            as="h3"
            fontSize="sm"
            textTransform="uppercase"
            color="gray.400"
            alignItems="flex-start"
            px={4}
          >
            Menu
          </Heading>
          <VStack w="100%" spacing={4}>
            {nav.map((link) => {
              return <SidebarActiveLink {...link} key={link.href} />
            })}
          </VStack>
        </VStack>
      </VStack>

      <Button
        label={sign_out.label}
        w="100%"
        variant="ghost"
        leftIcon={<CgLogOut />}
        onClick={logout}
      />
    </VStack>
  )
}
