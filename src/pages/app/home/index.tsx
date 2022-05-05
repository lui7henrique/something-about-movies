import { User } from '@supabase/supabase-js'
import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'

import { api } from 'services/api/index'
import { list } from 'services/api/list'
import { Locale } from 'types/locale'

import {
  AppHomeTemplate,
  AppHomeTemplateProps
} from 'templates/private/app/AppTemplate'
import { Genre } from 'types/genres/genres'
import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'

type AppHomeProps = {
  user: User
} & AppHomeTemplateProps

const Home = (props: AppHomeProps) => {
  const { user, ...appProps } = props

  return (
    <LayoutPrivate>
      <AppHomeTemplate {...appProps} />
    </LayoutPrivate>
  )
}

export default Home

export const getStaticProps: GetServerSideProps = async ({ req, locale }) => {
  /*
  |-----------------------------------------------------------------------------
  | Request to get initial popular movies with 20 items
  |-----------------------------------------------------------------------------
  |
  |
  */
  const popularMovies = await list<Movie[]>(locale as Locale, '/movie/popular')

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
  | Request to get popular tv shows with 20 items
  |-----------------------------------------------------------------------------
  |
  |
  */
  const popularTV = await list<TV[]>(locale as Locale, '/tv/popular')

  /*
  |-----------------------------------------------------------------------------
  | Request to get all tv shows genres
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
  | Select the first 3 items of popular and popular tv show to show in the home
  |-----------------------------------------------------------------------------
  |
  |
  */
  const BANNER_BY_TYPE = 3
  const banners = [
    ...popularMovies!.slice(0, BANNER_BY_TYPE),
    ...popularTV!.slice(0, BANNER_BY_TYPE)
  ].map((item) => {
    const title = (item as Movie).title || (item as TV).name
    const type = (item as Movie).title ? 'movie' : 'tv'

    return {
      id: item.id,
      image: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
      title: title as string,
      description: item.overview,
      type: type as 'movie' | 'tv'
    }
  })

  /*
  |-----------------------------------------------------------------------------
  | Format the movies to show just with basic infos and get genres infos
  |-----------------------------------------------------------------------------
  |
  |
  */
  const movies = popularMovies!
    .slice(BANNER_BY_TYPE, popularMovies?.length)
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
  | Format the tv shows to show just with basic infos
  |-----------------------------------------------------------------------------
  |
  |
  */
  const tv = popularTV!
    .slice(BANNER_BY_TYPE, popularTV?.length)
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
  | Get movies total by genre
  |-----------------------------------------------------------------------------
  |
  |
  */
  const moviesTotalByGenre = await Promise.all(
    moviesGenres.map(async (genre) => {
      const {
        data: { total_results }
      } = await api(locale as Locale).get<{
        total_results: number
      }>(`/discover/movie?with_genres=${genre.id}`)

      return {
        id: genre.id,
        name: genre.name,
        total: total_results
      }
    })
  )

  /*
  |-----------------------------------------------------------------------------
  | Get tv total by genre
  |-----------------------------------------------------------------------------
  |
  |
  */
  const tvTotalByGenre = await Promise.all(
    tvGenres.map(async (genre) => {
      const {
        data: { total_results }
      } = await api(locale as Locale).get<{
        total_results: number
      }>(`/discover/movie?with_genres=${genre.id}`)

      return {
        id: genre.id,
        name: genre.name,
        total: total_results
      }
    })
  )

  return {
    props: {
      banners,
      movies: movies.slice(0, 10),
      tv: tv.slice(0, 10),
      moviesTotalByGenre: moviesTotalByGenre.filter((genre) => genre.total),
      tvTotalByGenre: tvTotalByGenre.filter((genre) => genre.total)
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
