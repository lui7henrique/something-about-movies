import { Locale } from 'types/locale'
import { Query } from 'types/request'
import { api } from '.'

export async function get<T>(
  locale: Locale | undefined,
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
