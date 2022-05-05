// Vendors

// Components
import { Box, IconButton, toast, useTheme, useToast } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import { Locale } from 'types/locale'
import { sleep } from 'utils/sleep'
import { FieldText } from '../../../../components/Form/FieldText'
import { schema } from './schema'

// Types
export type SearchProps = {}

type SearchData = {
  query: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Search = (props: SearchProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    colors: { primary }
  } = useTheme()

  const { locale, push, query } = useRouter()
  const chakraToast = useToast()

  const {
    register,
    formState: { isSubmitting, errors },
    setError,
    handleSubmit
  } = useForm<SearchData>({
    resolver: yupResolver(schema(locale as Locale))
  })

  const placeholder: {
    [key in Locale]: string
  } = {
    'en-US': 'Search',
    'pt-BR': 'Buscar'
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

  const handleSearch = useCallback(async (data: SearchData) => {
    push(`/app/search?query=${data.query}`)
  }, [])

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */
  useEffect(() => {
    if (errors.query) {
      chakraToast({
        title: errors.query.message,
        status: 'error',
        duration: 2000,
        position: 'top-right',
        isClosable: true
      })
    }
  }, [errors])

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
    <Box as="form" onSubmit={handleSubmit(handleSearch)}>
      <FieldText
        inputRightElement={
          <IconButton
            aria-label="search"
            icon={<FaSearch color={primary[500]} />}
            size="sm"
            variant="ghost"
            type="submit"
            isLoading={isSubmitting}
          />
        }
        placeholder={placeholder[locale as Locale]}
        variant="outline"
        defaultValue={query.query}
        {...register('query')}
      />
    </Box>
  )
}
