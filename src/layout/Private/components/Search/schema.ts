import { Locale } from 'types/locale'
import * as yup from 'yup'
import { translations } from './translations'

export const schema = (t: Locale) => {
  const {
    fields: { query }
  } = translations[t]

  return yup.object().shape({
    query: yup.string().required(query.required)
  })
}
