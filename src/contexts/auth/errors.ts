import { Locale } from 'services/api'

type Errors = {
  [key in Locale]: {
    [key: string]: {
      title: string
      description: string
    }
  }
}

export const errors: Errors = {
  'en-US': {},
  'pt-BR': {
    'Email not confirmed': {
      title: 'Email não confirmado!',
      description:
        'Por favor, confirme sua conta através de seu email para continuar.'
    },
    'Invalid login credentials': {
      title: 'Credenciais inválidas!',
      description:
        'Por favor, verifique suas credenciais de login e tente novamente.'
    },
    default: {
      title: 'Ocorreu um erro inesperado!',
      description: 'Por favor, tente novamente mais tarde.'
    }
  }
}
