import axios from 'axios'
import { Locale } from './types'

export const api = (language: Locale) => {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      language
    }
  })
}
