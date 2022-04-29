import { LayoutPublic } from 'layout/Public'
import { GetStaticProps } from 'next'

import { api } from 'services/api/index'
import { list } from 'services/api/list'
import { Locale } from 'services/api/types'

import { HomeTemplate } from 'templates/public/HomeTemplate'
import { Genre } from 'types/genres/genres'
import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'

export type TotalByGenre = {
  id: number
  name: string
  total: number
}

type HomeProps = {
  movies: Movie[]
  tv: TV[]
  moviesTotalByGenre: TotalByGenre[]
  tvTotalByGenre: TotalByGenre[]
}

const Home = (props: HomeProps) => {
  const { movies, tv, moviesTotalByGenre, tvTotalByGenre } = props

  return (
    <LayoutPublic>
      <HomeTemplate
        movies={movies}
        tv={tv}
        moviesTotalByGenre={moviesTotalByGenre}
        tvTotalByGenre={tvTotalByGenre}
      />
    </LayoutPublic>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const movies = await list<Movie[]>(locale as Locale, '/movie/popular')
  const tv = await list<TV[]>(locale as Locale, '/tv/popular')

  const {
    data: { genres: moviesGenres }
  } = await api(locale as Locale).get<{
    genres: Genre[]
  }>('/genre/movie/list')

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

  const {
    data: { genres: tvGenres }
  } = await api(locale as Locale).get<{
    genres: Genre[]
  }>('/genre/tv/list')

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
      movies: movies!.slice(0, 3),
      tv: tv!.slice(0, 3),

      moviesTotalByGenre: moviesTotalByGenre.filter((item) => item.total > 0),
      tvTotalByGenre: tvTotalByGenre.filter((item) => item.total > 0)
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
