import { Locale } from 'types/locale'
import { Query } from 'types/request'
import { api } from './index'

export async function pagination<T>(
  locale: Locale,
  endpoint: string,
  query?: Query
): Promise<
  | {
      page: number
      results: T
      total_pages: number
      total_results: number
    }
  | undefined
> {
  let payload

  type Data = {
    page: number
    results: T
    total_pages: number
    total_results: number
  }

  try {
    const { data } = await api(locale).get<Data>(endpoint, {
      params: { ...query }
    })

    payload = data
  } catch (error: unknown) {
    payload = undefined
    throw error
  }

  return payload
}
