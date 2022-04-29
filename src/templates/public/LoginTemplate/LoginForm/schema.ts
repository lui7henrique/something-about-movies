import { Locale } from 'types/locale'
import * as yup from 'yup'
import { translation } from './translation'

export const schema = (t: Locale) => {
  return yup.object().shape({
    email: yup
      .string()
      .email(translation[t].email.invalid)
      .required(translation[t].email.required),
    password: yup.string().required(translation[t].password.required)
  })
}
