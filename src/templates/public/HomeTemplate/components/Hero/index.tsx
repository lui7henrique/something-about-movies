// Vendors
import lottie from '../../../../../../public/lottie.json'
import Lottie from 'react-lottie'

// Components
import {
  AspectRatio,
  Box,
  Heading,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
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
    <Limiter
      as="section"
      d="flex"
      w="100%"
      minH="calc(100vh - 64px)"
      alignItems="center"
      justifyContent="space-between"
      id="hero"
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <VStack
        alignItems="flex-start"
        spacing={4}
        w={{ base: '100%', lg: '40%' }}
        h="100vh"
        justifyContent="center"
      >
        <Box w="32" h="10px" backgroundColor="primary.500" />
        <Heading
          as="h2"
          fontWeight="bold"
          fontSize="5xl"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {title}
        </Heading>

        <Text fontSize="xl" data-aos="fade-right" data-aos-delay="300">
          {description}
        </Text>

        <Stack direction="row">
          <Button
            label={buttons[0].label}
            href={buttons[0].href}
            data-aos="fade-right"
            data-aos-delay="500"
          />
          <Button
            label={buttons[1].label}
            href={buttons[1].href}
            variant="outline"
            data-aos="fade-right"
            data-aos-delay="700"
          />
        </Stack>
      </VStack>

      <AspectRatio display={{ base: 'none', lg: 'flex' }} w="50%" ratio={1}>
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          isStopped={false}
          isPaused={false}
        />
      </AspectRatio>
    </Limiter>
  )
}
