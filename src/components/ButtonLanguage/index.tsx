// Vendors

// Components
import {
  Box,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text
} from '@chakra-ui/react'
import { Button } from 'components/Button'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { BiWorld } from 'react-icons/bi'
import { Locale } from 'services/api'
import { languages } from 'utils/languages'
import { translation } from './translation'

// Types

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const ButtonLanguage = () => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { asPath, push, locale } = useRouter()
  const { label, changeLanguage } = translation[locale as Locale]

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
  const handleChangeLocale = useCallback((locale: Locale) => {
    localStorage.setItem('locale', locale)
    push(asPath, asPath, { locale: locale })
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
    <Popover>
      <PopoverTrigger>
        <Box>
          <Button label={label} leftIcon={<BiWorld size={20} />} />
        </Box>
      </PopoverTrigger>

      <PopoverContent bgColor="gray.800" borderWidth="0">
        <PopoverCloseButton />
        {/* <PopoverHeader borderWidth="0" p={3}>
          <Stack direction="row" alignItems="center">

            <Heading as="h6" fontSize="lg">
              {changeLanguage}
            </Heading>
          </Stack>
        </PopoverHeader> */}

        <PopoverBody p={0}>
          <Stack direction="column" spacing={0}>
            {languages.map((language) => {
              return (
                <Stack
                  direction="row"
                  alignItems="center"
                  _hover={{
                    bg: 'gray.700'
                  }}
                  transition="all 0.2s"
                  cursor="pointer"
                  p={3}
                  bgColor={
                    locale === language.value ? 'gray.700' : 'transparent'
                  }
                  onClick={() => handleChangeLocale(language.value as Locale)}
                  key={language.value}
                >
                  <ReactCountryFlag
                    countryCode={language.country_code}
                    style={{
                      fontSize: '1.8rem'
                    }}
                  />
                  <Text>{language.name}</Text>
                </Stack>
              )
            })}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
