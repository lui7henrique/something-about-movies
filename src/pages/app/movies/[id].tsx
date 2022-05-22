import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { api } from 'services/api'
import { get } from 'services/api/get'
import { pagination } from 'services/api/pagination'

import {
  MovieTemplate,
  MovieTemplateProps
} from 'templates/private/app/MovieTemplate'
import { Genre } from 'types/genres/genres'

import { Locale } from 'types/locale'
import { Cast, Crew } from 'types/movies/credits'
import { Images } from 'types/movies/images'
import { Details, Keyword, Movie } from 'types/movies/list'
import { Videos } from 'types/videos'

type MovieProps = MovieTemplateProps

const Movie = (props: MovieProps) => {
  return (
    <LayoutPrivate>
      <MovieTemplate {...props} />
    </LayoutPrivate>
  )
}

export default Movie

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale
}) => {
  const id = params?.id

  /*
  |-----------------------------------------------------------------------------
  | Redirect to home if no id
  |-----------------------------------------------------------------------------
  |
  |
  */

  if (!id) {
    return {
      props: {},
      redirect: {
        destination: '/app/404'
      }
    }
  }

  /*
  |-----------------------------------------------------------------------------
  | Request to get movie genres
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
  | Request to get movie details
  |-----------------------------------------------------------------------------
  |
  |
  */
  const details = await get<Details>(locale as Locale, `/movie/${id}`)

  /*
  |-----------------------------------------------------------------------------
  | Request to get movie trailer
  |-----------------------------------------------------------------------------
  |
  |
  */

  const videos = await get<Videos>(locale as Locale, `/movie/${id}/videos`)
  const trailer =
    videos?.results.find(
      (video) => video.type === 'Trailer' && video.official
    ) ?? null

  /*
  |-----------------------------------------------------------------------------
  | Request to get movie keywords
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { keywords }: { keywords: Keyword[] } = await get<any>(
    locale as Locale,
    `/movie/${id}/keywords`
  )

  /*
  |-----------------------------------------------------------------------------
  | Request to get movie credits
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { cast, crew }: { cast: Cast[]; crew: Crew[] } = await get<any>(
    locale as Locale,
    `/movie/${id}/credits`
  )

  /*
  |-----------------------------------------------------------------------------
  | Request to get movie images
  |-----------------------------------------------------------------------------
  |
  |
  */
  const images = await get<Images>(undefined, `/movie/${id}/images`)

  /*
  |-----------------------------------------------------------------------------
  | Request to get movie recommendations
  |-----------------------------------------------------------------------------
  |
  |
  */
  const allRecommendations = await pagination<Movie[]>(
    locale as Locale,

    `/movie/${id}/recommendations`
  )

  const unformattedRecommendations = allRecommendations?.results?.filter(
    (r) => r.poster_path
  )

  const recommendations = unformattedRecommendations?.map((item) => {
    return {
      id: item.id,
      image: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
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
  | Request to get similar movies
  |-----------------------------------------------------------------------------
  |
  |
  */

  const allSimilarMovies = await pagination<Movie[]>(
    locale as Locale,

    `/movie/${id}/similar`
  )

  const unformattedSimilarMovies = allSimilarMovies?.results?.filter(
    (r) => r.poster_path
  )

  const similar = unformattedSimilarMovies?.map((item) => {
    return {
      id: item.id,
      image: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
      title: item.title,
      description: item.overview,
      genres: item.genre_ids.map((id) => {
        const genre = moviesGenres.find((g) => g.id === id)

        return genre ? genre : { id: id, name: 'Unknown' }
      })
    }
  })

  return {
    props: {
      details,
      trailer,
      keywords,
      cast: cast.filter((cast) => cast.profile_path),
      crew: crew.filter((crew) => crew.profile_path),
      images,
      recommendations,
      similar
    }
  }
}
