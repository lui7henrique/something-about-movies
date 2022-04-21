import { Locale } from 'services/api'
import * as yup from 'yup'
import zxcvbn from 'zxcvbn'
import { translation } from './translation'

export const schema = (t: Locale) => {
  const {
    fields: { name, userName, email, password, confirmPassword }
  } = translation[t]

  return yup.object().shape({
    name: yup.string().required(name.required),

    userName: yup.string().required(userName.required),

    email: yup.string().email(email.invalid).required(email.required),

    password: yup
      .string()
      .required(password.required)
      .test('is-strong', password.invalid, (value) => {
        if (value) {
          return zxcvbn(value).score >= 4
        }

        return false
      }),

    confirmPassword: yup
      .string()
      .required(confirmPassword.required)
      .oneOf([yup.ref('password'), null], confirmPassword.invalid)
  })
}
