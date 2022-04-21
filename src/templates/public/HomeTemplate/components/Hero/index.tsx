// Vendors

// Components
import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { Button } from 'components/Button'
import { Limiter } from 'components/Limiter'
import { useRouter } from 'next/router'
import { Locale } from 'services/api'
import { translation } from './translation'

// Types

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Hero = () => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { locale } = useRouter()
  const { title, description, buttons } = translation[locale as Locale]

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
    <Limiter
      as="section"
      d="flex"
      w="100%"
      h="calc(100vh - 64px)"
      alignItems="Center"
      id="hero"
    >
      <VStack
        alignItems="flex-start"
        spacing={4}
        data-aos="fade-right"
        data-aos-delay="0"
      >
        <Box w="32" h="10px" backgroundColor="primary.500" />
        <Heading
          as="h2"
          fontWeight="bold"
          fontSize="5xl"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {title[1]} <br />
          {title[2]}
        </Heading>

        <Text fontSize="xl" data-aos="fade-right" data-aos-delay="300">
          {description[1]}
          <Box
            as="br"
            display={{
              base: 'none',
              md: 'block'
            }}
          />
          {description[2]}

          <Box
            as="br"
            display={{
              base: 'none',
              md: 'block'
            }}
          />
          {description[3]}
        </Text>

        <Stack direction="row">
          <Button
            label={buttons[1]}
            href="/login"
            data-aos="fade-right"
            data-aos-delay="500"
          />
          <Button
            label={buttons[2]}
            variant="outline"
            data-aos="fade-right"
            data-aos-delay="700"
          />
        </Stack>
      </VStack>
    </Limiter>
  )
}
