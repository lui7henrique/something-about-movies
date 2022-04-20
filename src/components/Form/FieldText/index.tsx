// Vendors
import React, { forwardRef, ReactElement } from 'react'
import { FieldError } from 'react-hook-form'

// Components
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  useTheme
} from '@chakra-ui/react'

// Types
type FieldTextProps = {
  name: string
  label?: string
  error?: FieldError
  inputLeftElement?: ReactElement
  inputRightElement?: ReactElement
  mask?: string
} & InputProps

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

const FieldTextBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FieldTextProps
> = (props, ref) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    name,
    label,
    error,
    inputLeftElement,
    inputRightElement,
    mask,
    ...rest
  } = props

  const theme = useTheme()

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
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <InputGroup>
        {inputLeftElement && (
          <InputLeftElement>{inputLeftElement}</InputLeftElement>
        )}

        <Input
          id={name}
          name={name}
          ref={ref}
          pl={inputLeftElement ? 'auto' : '4'}
          borderRadius="sm"
          _disabled={{
            opacity: 0.7,
            cursor: 'not-allowed'
          }}
          borderColor="white"
          {...rest}
        />

        {inputRightElement && (
          <InputRightElement>{inputRightElement}</InputRightElement>
        )}
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const FieldText = forwardRef(FieldTextBase)
