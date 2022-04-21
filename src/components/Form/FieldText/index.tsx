// Vendors
import React, { forwardRef, ReactElement } from 'react'
import { FieldError } from 'react-hook-form'

// Components
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Progress,
  transition,
  useTheme
} from '@chakra-ui/react'
import { ZXCVBNScore } from 'zxcvbn'

// Types
type FieldTextProps = {
  name: string
  label?: string
  error?: FieldError
  inputLeftElement?: ReactElement
  inputRightElement?: ReactElement
  mask?: string
  passwordStrength?: ZXCVBNScore
  hasPasswordStrength?: boolean
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
    hasPasswordStrength,
    passwordStrength,
    ...rest
  } = props

  const {
    colors: { gradient }
  } = useTheme()

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
      <Flex alignItems="center">
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        {hasPasswordStrength && (
          <Progress
            value={passwordStrength ? passwordStrength! * 25 : 0}
            size="xs"
            borderRadius="full"
            w="100%"
            mt={-2}
            sx={{
              '> div': {
                transition: 'all 0.2s ease-in-out',
                backgroundImage: gradient.basic
              }
            }}
          />
        )}
      </Flex>

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
