import { Locale } from 'types/locale'

type Translations = {
  [key in Locale]: {
    fields: {
      query: {
        required: string
      }
    }
  }
}

export const translations: Translations = {
  'pt-BR': {
    fields: {
      query: {
        required: 'Preencha o campo de busca'
      }
    }
  },
  'en-US': {
    fields: {
      query: {
        required: 'Fill the search field'
      }
    }
  }
}
