// Vendors
import { useRouter } from 'next/router'

// Components
import { Flex, IconButton, Stack, useBreakpointValue } from '@chakra-ui/react'
import { Button } from 'components/Button'
import { ButtonLanguage } from 'components/ButtonLanguage'
import { Limiter } from 'components/Limiter'
import { Logo } from 'components/Logo'

import { MdMenu, MdPerson } from 'react-icons/md'

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
  const { push } = useRouter()

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
        label="Login"
        variant="outline"
        onClick={() => push('/login')}
        leftIcon={<MdPerson size={20} />}
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
      <Flex as="nav">
        <Logo />
      </Flex>
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
