import { Query } from 'types/request'
import { api } from './index'
import { Locale } from './types'

export async function pagination<T>(
  locale: Locale,
  endpoint: string,
  query?: Query
): Promise<T | undefined> {
  let payload

  try {
    const { data } = await api(locale).get<T>(endpoint, {
      params: { ...query }
    })

    payload = data
  } catch (error: unknown) {
    payload = undefined
    throw error
  }

  return payload
}
