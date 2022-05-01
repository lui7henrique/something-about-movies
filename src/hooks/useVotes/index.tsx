import { HStack, Text } from '@chakra-ui/react'
import _ from 'lodash'
import { useCallback } from 'react'
import { FaStar } from 'react-icons/fa'
import { Locale } from 'types/locale'

export const useVotes = () => {
  const handleRenderVotes = useCallback(
    (voteAverage: number, voteCount: number, locale: Locale) => {
      const votes = Number((voteAverage / 2).toFixed(1))
      const filled = _.range(0, votes)
      const empty = _.range(0, 5)

      const Component = () => {
        return (
          <HStack>
            {empty.map((_, index) => {
              const isFilled = typeof filled[index] !== 'undefined'

              return (
                <FaStar
                  key={index}
                  color={isFilled ? '#ca2b5f' : '#212024'}
                  style={{
                    verticalAlign: 'middle'
                  }}
                />
              )
            })}

            <Text fontSize="sm" marginTop={4}>
              ({voteCount.toLocaleString(locale)}{' '}
              {locale === 'pt-BR' ? 'Votos' : 'Votes'})
            </Text>
          </HStack>
        )
      }

      return <Component />
    },
    []
  )

  return { handleRenderVotes }
}
