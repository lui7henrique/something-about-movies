import { Locale } from 'types/locale'

type Cases = 'login' | 'logout'

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
    },
    logout: {
      success: {
        title: 'Logout successful!',
        description: 'See you soon!'
      },
      errors: {
        default: {
          title: 'Something went wrong!',
          description: 'Please, try again later.'
        }
      }
    }
  },
  'pt-BR': {
    login: {
      errors: {
        'Email not confirmed': {
          title: 'Email não confirmado!',
          description:
            'Por favor, confirme sua conta via através do seu email para continuar.'
        },
        'Invalid login credentials': {
          title: 'Credenciais de login inválidas!',
          description:
            'Por favor, verifique seu email e senha e tente novamente.'
        },
        default: {
          title: 'Something went wrong!',
          description: 'Por favor, tente novamente mais tarde.'
        }
      },
      success: {
        title: 'Login feito com sucesso',
        description: 'Bem-vindo ao cineapp.'
      }
    },
    logout: {
      success: {
        title: 'Logout feito com sucesso',
        description: 'Até mais!'
      },
      errors: {
        default: {
          title: 'Algo deu errado!',
          description: 'Por favor, tente novamente mais tarde.'
        }
      }
    }
  }
}
