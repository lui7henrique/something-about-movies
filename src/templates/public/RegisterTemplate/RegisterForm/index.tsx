// Vendors
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import zxcvbn from 'zxcvbn'

// Components
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Button } from 'components/Button'
import { FieldText } from 'components/Form/FieldText'

import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { schema } from './schema'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { Locale } from 'services/api'
import { translation } from './translation'

// Types

type FormData = {
  name: string
  userName: string
  email: string
  password: string
  confirmPassword: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const RegisterForm = () => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { locale } = useRouter()

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema(locale as Locale))
  })

  const {
    title,
    text,
    login,
    fields: { name, userName, email, password, confirmPassword },
    button
  } = translation[locale as Locale]

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
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert(JSON.stringify(data, null, 2))
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
            {login.label}{' '}
            <Link href="/login">
              <a>
                <Text as="span" color="primary.500">
                  {login.link}
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
        <Stack
          w="100%"
          direction={{
            base: 'column',
            lg: 'row'
          }}
          spacing={4}
        >
          <FieldText
            label={name.label}
            placeholder={name.placeholder}
            type="name"
            inputLeftElement={<MdPerson size={20} />}
            {...register('name')}
            error={errors.name}
          />

          <FieldText
            label={userName.label}
            placeholder={userName.placeholder}
            type="userName"
            inputLeftElement={<MdPerson size={20} />}
            {...register('userName')}
            error={errors.userName}
          />
        </Stack>

        <FieldText
          label={email.label}
          placeholder={email.placeholder}
          type="email"
          inputLeftElement={<MdEmail size={20} />}
          {...register('email')}
          error={errors.email}
        />

        <Stack
          direction={{
            base: 'column',
            lg: 'row'
          }}
          w="100%"
          spacing={4}
        >
          <FieldText
            label={password.label}
            placeholder={password.placeholder}
            type="password"
            inputLeftElement={<MdLock size={20} />}
            {...register('password')}
            error={errors.password}
            passwordStrength={
              watch('password') ? zxcvbn(watch('password')).score : undefined
            }
            hasPasswordStrength
          />

          <FieldText
            label={confirmPassword.label}
            placeholder={confirmPassword.placeholder}
            type="password"
            inputLeftElement={<MdLock size={20} />}
            {...register('confirmPassword')}
            error={errors.confirmPassword}
          />
        </Stack>

        <Flex justifyContent="flex-end" w="100%" alignItems="center">
          <Button label={button.label} type="submit" isLoading={isSubmitting} />
        </Flex>
      </VStack>
    </VStack>
  )
}
