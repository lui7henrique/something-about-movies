import axios from 'axios'
import { Query } from 'types/request'

export type Locale = 'pt-BR' | 'en-US'

export const TMDB = (language: Locale) => {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      language
    }
  })
}

export async function list<T>(
  locale: Locale,
  endpoint: string,
  query?: Query
): Promise<T | undefined> {
  let payload

  try {
    const {
      data: { results }
    } = await TMDB(locale).get<{
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
