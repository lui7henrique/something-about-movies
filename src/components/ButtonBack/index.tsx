// Vendors

// Components
import { ButtonProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IoMdArrowBack } from 'react-icons/io'
import { Locale } from 'types/locale'
import { Button } from 'components/Button'

// Types
type ButtonBackProps = ButtonProps

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const ButtonBack = (props: ButtonBackProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { back, locale } = useRouter()

  const label: {
    [key in Locale]: string
  } = {
    'en-US': 'Back',
    'pt-BR': 'Voltar'
  }
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
    <Button
      label={label[locale as Locale]}
      aria-label="back"
      leftIcon={<IoMdArrowBack size={20} />}
      onClick={back}
      zIndex={5}
      borderRadius="sm"
      {...props}
    ></Button>
  )
}
