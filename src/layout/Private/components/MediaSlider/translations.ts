import { Locale } from 'services/api'

type Translations = {
  [key in Locale]: {
    slide: {
      type: {
        movie: string
        tv: string
      }
    }
    buttons: {
      details: string
      watchlist: string
    }
  }
}

export const translations: Translations = {
  'en-US': {
    slide: {
      type: {
        movie: 'Movie',
        tv: 'Serie'
      }
    },
    buttons: {
      details: 'See details',
      watchlist: 'Add to watchlist'
    }
  },
  'pt-BR': {
    slide: {
      type: {
        movie: 'Filme',
        tv: 'Série'
      }
    },
    buttons: {
      details: 'Ver detalhes',
      watchlist: 'Adicionar à watchlist'
    }
  }
}
