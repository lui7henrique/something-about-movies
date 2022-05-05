import { GetServerSideProps } from 'next'
import { list } from 'services/api/list'
import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'

import { LayoutPrivate } from 'layout/Private'

import { Locale } from 'types/locale'
import { Person } from 'types/person'
import {
  SearchTemplate,
  SearchTemplateProps
} from 'templates/private/app/SearchTemplate'
import { api } from 'services/api'
import { Genre } from 'types/genres/genres'

type SearchProps = SearchTemplateProps

const Search = (props: SearchProps) => {
  return (
    <LayoutPrivate>
      <SearchTemplate {...props} />
    </LayoutPrivate>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async ({
  query: defaultQuery,
  locale
}) => {
  const query = defaultQuery.query

  /*
  |-----------------------------------------------------------------------------
  | Request to get movies genres
  |-----------------------------------------------------------------------------
  |
  |
  */

  const {
    data: { genres: moviesGenres }
  } = await api(locale as Locale).get<{
    genres: Genre[]
  }>('/genre/movie/list')

  /*
  |-----------------------------------------------------------------------------
  | Request to search movies
  |-----------------------------------------------------------------------------
  |
  |
  */
  const searchMovies = await list<Movie[]>(
    locale as Locale,
    `/search/movie?query=${query}`
  )

  /*
  |-----------------------------------------------------------------------------
  | Format movies
  |-----------------------------------------------------------------------------
  |
  |
  */
  const movies = searchMovies!
    .filter((item) => item.backdrop_path)
    .map((item) => {
      return {
        id: item.id,
        image: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
        title: item.title,
        description: item.overview,
        genres: item.genre_ids.map((id) => {
          const genre = moviesGenres.find((g) => g.id === id)

          return genre ? genre : { id: id, name: 'Unknown' }
        })
      }
    })

  /*
  |-----------------------------------------------------------------------------
  | Request to get tv genres
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    data: { genres: tvGenres }
  } = await api(locale as Locale).get<{
    genres: Genre[]
  }>('/genre/tv/list')

  /*
  |-----------------------------------------------------------------------------
  | Request to search tv
  |-----------------------------------------------------------------------------
  |
  |
  */

  const allTv = await list<TV[]>(locale as Locale, `/search/tv?query=${query}`)

  /*
  |-----------------------------------------------------------------------------
  | Format tv items
  |-----------------------------------------------------------------------------
  |
  |
  */

  const tv = allTv!
    .filter((item) => item.backdrop_path)
    .map((item) => {
      return {
        id: item.id,
        image: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
        title: item.name,
        description: item.overview,
        genres: item.genre_ids.map((id) => {
          const genre = tvGenres.find((g) => g.id === id)

          return genre ? genre : { id: id, name: 'Unknown' }
        })
      }
    })

  /*
  |-----------------------------------------------------------------------------
  | Request to search people
  |-----------------------------------------------------------------------------
  |
  |
  */
  const people = await list<Person>(
    locale as Locale,
    `/search/person?query=${query}`
  )

  return {
    props: {
      movies,
      tv,
      people
    }
  }
}
