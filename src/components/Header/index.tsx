// Vendors

// Components
import { Flex, Stack } from '@chakra-ui/react'
import { Button } from 'components/Button'
import { ButtonLanguage } from 'components/ButtonLanguage'
import { Limiter } from 'components/Limiter'
import { Logo } from 'components/Logo'
import { useRouter } from 'next/router'

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
        px={4}
      >
        <Flex as="nav">
          <Logo />
        </Flex>

        <Stack direction="row" spacing={4}>
          <Button
            label="Login"
            variant="ghost"
            onClick={() => push('/login')}
          />
          <ButtonLanguage />
        </Stack>
      </Flex>
    </Limiter>
  )
}
