// Vendors

// Components
import { Box, IconButton, Tooltip } from '@chakra-ui/react'
import { useTheme } from 'contexts/theme'
import { useRouter } from 'next/router'
import { FiMoon, FiSun } from 'react-icons/fi'
import { Locale } from 'types/locale'
import { buttonThemeTranslations } from './translations'

// Types
export type ButtonThemeProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const ButtonTheme = (props: ButtonThemeProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {} = props

  const { theme, handleToggleTheme } = useTheme()
  const { locale } = useRouter()

  const { tooltip } = buttonThemeTranslations[locale as Locale][theme]

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
    <Tooltip label={tooltip.label}>
      <IconButton
        aria-label="login"
        borderRadius="full"
        icon={theme === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
        onClick={handleToggleTheme}
      />
    </Tooltip>
  )
}
