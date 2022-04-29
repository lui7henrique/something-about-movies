import { Query } from 'types/request'
import { api } from './index'
import { Locale } from './types'

export async function list<T>(
  locale: Locale,
  endpoint: string,
  query?: Query
): Promise<T | undefined> {
  let payload

  try {
    const {
      data: { results }
    } = await api(locale).get<{
      results: T
    }>(endpoint, {
      params: { ...query }
    })

    payload = results
  } catch (error: unknown) {
    payload = undefined
    throw error
  }

  return payload
}
