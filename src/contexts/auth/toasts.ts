import { Locale } from 'services/api'

type Cases = 'login'

type Toast = {
  title: string
  description: string
}

type Toasts = {
  [key in Locale]: {
    [key in Cases]: {
      errors: {
        [key: string]: Toast
        default: Toast
      }
      success: Toast
    }
  }
}

export const toasts: Toasts = {
  'en-US': {
    login: {
      errors: {
        'Email not confirmed': {
          title: 'Email not confirmed!',
          description:
            'Please, confirm your account via your email to continue.'
        },
        'Invalid login credentials': {
          title: 'Invalid login credentials!',
          description: 'Please check your email and password and try again.'
        },
        default: {
          title: 'Something went wrong!',
          description: 'Please, try again later.'
        }
      },
      success: {
        title: 'Login successful!',
        description: 'Welcome to the cineapp.'
      }
    }
  },
  'pt-BR': {
    login: {
      errors: {
        'Email not confirmed': {
          title: 'Email not confirmed!',
          description:
            'Please, confirm your account via your email to continue.'
        },
        'Invalid login credentials': {
          title: 'Invalid login credentials!',
          description: 'Please check your email and password and try again.'
        },
        default: {
          title: 'Something went wrong!',
          description: 'Please, try again later.'
        }
      },
      success: {
        title: 'Login feito com sucesso',
        description: 'Bem-vindo ao cineapp.'
      }
    }
  }
}
