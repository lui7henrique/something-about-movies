import { GetServerSideProps } from 'next'

import { LayoutPrivate } from 'layout/Private'

import { Locale } from 'types/locale'
import {
  Details,
  ExternalIds,
  Images,
  MovieCredits,
  TvCredits
} from 'types/person'

import { get } from 'services/api/get'
import {
  PersonTemplate,
  PersonTemplateProps
} from 'templates/private/app/PersonTemplate'
import { api } from 'services/api'
import { Genre } from 'types/genres/genres'

type PersonProps = PersonTemplateProps

const Person = (props: PersonProps) => {
  return (
    <LayoutPrivate>
      <PersonTemplate {...props} />
    </LayoutPrivate>
  )
}

export default Person

export const getServerSideProps: GetServerSideProps = async ({
  query: defaultQuery,
  locale
}) => {
  const id = defaultQuery.id

  /*
  |-----------------------------------------------------------------------------
  | Request to get details of a person
  |-----------------------------------------------------------------------------
  |
  |
  */
  const details = await get<Details>(locale as Locale, `/person/${id}`)

  /*
  |-----------------------------------------------------------------------------
  | Request to get all movies genres
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
  | Request to get movie credits of a person and format to minimal media
  |-----------------------------------------------------------------------------
  |
  |
  */
  const movieCredits = await get<MovieCredits>(
    locale as Locale,
    `/person/${id}/movie_credits`
  )

  const moviesCast = movieCredits!.cast
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

  const moviesCrew = movieCredits!.crew
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

  const movies = {
    cast: moviesCast,
    crew: moviesCrew
  }

  /*
  |-----------------------------------------------------------------------------
  | Request to get all tv genres
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
  | Request to get tv credits of a person and format to minimal media
  |-----------------------------------------------------------------------------
  |
  |
  */

  const tvCredits = await get<TvCredits>(
    locale as Locale,
    `/person/${id}/tv_credits`
  )

  const tvCast = tvCredits!.cast
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

  const tvCrew = tvCredits!.crew
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

  const tv = {
    cast: tvCast,
    crew: tvCrew
  }

  /*
  |-----------------------------------------------------------------------------
  | Request to get images of a person
  |-----------------------------------------------------------------------------
  |
  |
  */

  const images = await get<Images>(locale as Locale, `/person/${id}/images`)

  /*
  |-----------------------------------------------------------------------------
  | Request to get external ids of a person
  |-----------------------------------------------------------------------------
  |
  |
  */

  const externalIds = await get<ExternalIds>(
    locale as Locale,
    `/person/${id}/external_ids`
  )

  /*
  |-----------------------------------------------------------------------------
  | Request to get highlight
  |-----------------------------------------------------------------------------
  |
  |
  */

  let highlight = undefined

  if (movieCredits && movieCredits.cast[0]) {
    highlight = movieCredits.cast[0]
  } else if (tvCredits && tvCredits.cast[0]) {
    highlight = tvCredits.cast[0]
  }

  return {
    props: {
      details,
      movies,
      tv,
      images,
      externalIds,
      highlight
    }
  }
}
