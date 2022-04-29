// Vendors
import { useRouter } from 'next/router'

// Components
import {
  Box,
  Divider,
  Flex,
  IconButton,
  Stack,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import { Button } from 'components/Button'
import { ButtonLanguage } from 'components/ButtonLanguage'
import { Limiter } from 'components/Limiter'
import { Logo } from 'components/Logo'

import { MdMenu, MdPerson } from 'react-icons/md'
import { translations } from './translations'
import { Locale } from 'types/locale'
import { HeaderActiveLink } from 'components/HeaderActiveLink'
import { supabase } from 'services/supabase'
import { FaUnlock } from 'react-icons/fa'

// Types
export type HeaderProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Header = (props: HeaderProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { push, locale } = useRouter()
  const { links } = translations[locale as Locale]
  const user = supabase.auth.user()

  const buttonLogin = useBreakpointValue({
    base: (
      <IconButton
        aria-label="login"
        variant="ghost"
        borderRadius="Sm"
        onClick={() => push('/login')}
        icon={<MdPerson size={20} />}
      />
    ),
    lg: (
      <Button
        label={user ? (locale === 'pt-BR' ? 'Acessar' : 'Access') : 'Login'}
        variant="outline"
        href={user ? '/app' : '/login'}
        leftIcon={user ? <FaUnlock size={20} /> : <MdPerson size={20} />}
      />
    )
  })

  const buttonLanguage = useBreakpointValue({
    base: <ButtonLanguage />,
    lg: <ButtonLanguage />
  })

  const nav = useBreakpointValue({
    base: (
      <IconButton
        aria-label="menu"
        borderRadius="sm"
        icon={<MdMenu size={20} />}
      />
    ),
    lg: (
      <Stack direction="row" align="center" spacing={8} h="100%">
        <Logo />

        <Box w="1px" h="70%" bgColor="white" opacity={0.1} />

        <Flex as="nav">
          {links.map((link) => {
            return <HeaderActiveLink {...link} />
          })}
        </Flex>
      </Stack>
    )
  })

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
    <Limiter as="header" h="4rem">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="full"
        bgColor="transparent"
        maxWidth="1280"
        mx="auto"
      >
        {nav}
        <Stack direction="row" spacing={4}>
          {buttonLogin}
          {buttonLanguage}
        </Stack>
      </Flex>
    </Limiter>
  )
}
