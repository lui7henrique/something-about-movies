export const translation = (genres: number, total: number) => {
  return {
    'en-US': {
      text: `And others ${genres} genres, with over ${total} movies`,
      viewAll: 'View all'
    },
    'pt-BR': {
      text: `E outros ${genres} gêneros, com mais de ${total} filmes`,
      viewAll: 'Ver todos'
    }
  }
}
