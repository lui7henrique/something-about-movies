// Vendors
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

// Components
import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { Button } from 'components/Button'
import { FieldText } from 'components/Form/FieldText'

import { MdEmail, MdLock } from 'react-icons/md'
import { schema } from './schema'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { Locale } from 'services/api'
import { translation } from './translation'
import { supabase } from 'services/supabase'
import { useAuth } from 'contexts/auth'

// Types

type FormData = {
  email: string
  password: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const LoginForm = () => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { locale } = useRouter()
  const { login } = useAuth()

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(schema(locale as Locale))
  })

  const { title, text, email, password, sign_up, button } =
    translation[locale as Locale]

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
  const onSubmit = useCallback(async (data: FormData) => {
    await login(data.email, data.password)
  }, [])

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
      alignItems="flex-start"
      px={{
        base: '4',
        lg: '16'
      }}
      spacing={8}
      w="100%"
    >
      <VStack spacing={2} alignItems="flex-start" w="100%">
        <Heading fontSize="3xl">{title}</Heading>
        <Text>{text}</Text>
        <HStack>
          <Box h="10" w="2" bgColor="primary.500" />
          <Text>
            {sign_up.label}{' '}
            <Link href="/register">
              <a>
                <Text as="span" color="primary.500">
                  {sign_up.link}
                </Text>
              </a>
            </Link>
          </Text>
        </HStack>
      </VStack>

      <VStack
        spacing={4}
        w="100%"
        alignItems="flex-start"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FieldText
          label={email.label}
          placeholder={email.placeholder}
          type="email"
          inputLeftElement={<MdEmail size={20} />}
          {...register('email')}
          error={errors.email}
        />

        <FieldText
          label={password.label}
          placeholder={password.placeholder}
          type="password"
          inputLeftElement={<MdLock size={20} />}
          {...register('password')}
          error={errors.password}
        />

        <Flex justifyContent="flex-end" w="100%" alignItems="center">
          <Button label={button.label} type="submit" isLoading={isSubmitting} />
        </Flex>
      </VStack>
    </VStack>
  )
}
