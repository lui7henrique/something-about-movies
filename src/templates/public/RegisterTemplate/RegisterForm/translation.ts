import { Locale } from 'types/locale'
import { Field } from 'types/form/field'

type Translation = {
  [key in Locale]: {
    title: string
    text: string
    login: {
      label: string
      link: string
    }
    fields: {
      name: Field
      username: Field
      email: Field
      password: Field
      confirmPassword: Field
    }
    button: {
      label: string
    }
    toasts: {
      [key in 'success' | 'error']: {
        title: string
        description: string
      }
    }
  }
}

export const translation: Translation = {
  'en-US': {
    title: 'Create an account',
    text: 'Be part of the largest cinema community in the world, meet and discuss thousands of movies and TV series!',
    login: {
      label: 'Already have an account? Access by clicking',
      link: 'here'
    },
    fields: {
      name: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: 'Please enter your name.'
      },
      username: {
        label: 'Username',
        placeholder: 'Enter your username',
        required: 'Please enter your username.'
      },
      email: {
        label: 'E-mail',
        placeholder: 'Enter your email address',
        required: 'Please enter your email address.',
        invalid: 'Please enter a valid email address.'
      },
      password: {
        label: 'Password',
        placeholder: 'Enter your password',
        required: 'Please enter a password.',
        invalid:
          'Please enter a strong password. Containing letters, letters, numbers and special characters.'
      },
      confirmPassword: {
        label: 'Confirm password',
        placeholder: 'Confirm your password',
        required: 'Please confirm your password.',
        invalid: 'Passwords do not match.'
      }
    },
    button: {
      label: 'Register'
    },
    toasts: {
      success: {
        title: 'Account created successfully!',
        description: 'Please, verify the account in your email.'
      },
      error: {
        title: 'Error creating account!',
        description: 'Please try again later.'
      }
    }
  },
  'pt-BR': {
    title: 'Crie uma conta',
    text: 'Faça parte da maior comunidade de cinema do mundo, e descubra e    discuta sobre milhares de filmes e séries de TV!',
    login: {
      label: 'Já tem uma conta? Acesse clicando',
      link: 'aqui'
    },
    fields: {
      name: {
        label: 'Nome',
        placeholder: 'Digite seu nome',
        required: 'Por favor, insira seu nome.'
      },
      username: {
        label: 'Nome de usuário',
        placeholder: 'Digite seu nome de usuário',
        required: 'Por favor, insira seu nome de usuário.'
      },
      email: {
        label: 'E-mail',
        placeholder: 'Digite seu email',
        required: 'Por favor, insira seu email.',
        invalid: 'Por favor, insira um email válido.'
      },
      password: {
        label: 'Senha',
        placeholder: 'Digite sua senha',
        required: 'Por favor, insira sua senha.',
        invalid:
          'Por favor, insira uma senha forte. Contendo letras maiúsculas, minúsculas, números e caracteres especiais.'
      },
      confirmPassword: {
        label: 'Senha de confirmação',
        placeholder: 'Confirme sua senha',
        required: 'Por favor, confirme sua senha',
        invalid: 'As senhas devem coincidir.'
      }
    },
    button: {
      label: 'Criar conta'
    },
    toasts: {
      success: {
        title: 'Conta criada com sucesso!',
        description: 'Verifique a conta em seu email.'
      },
      error: {
        title: 'Erro ao criar conta!',
        description: 'Por favor, tente novamente mais tarde.'
      }
    }
  }
}
