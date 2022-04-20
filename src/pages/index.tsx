import { GetStaticProps } from 'next'
import { get, Locale } from 'services/api'
import { HomeTemplate } from 'templates/HomeTemplate'
import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'

type HomeProps = {
  movies: Movie[]
  tv: TV[]
}

const Home = (props: HomeProps) => {
  const { movies, tv } = props

  return <HomeTemplate />
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const movies = await get<Movie[]>(locale as Locale, '/movie/popular')
  const tv = await get<TV[]>(locale as Locale, '/tv/popular')

  return {
    props: {
      movies: movies!.slice(0, 3),
      tv: tv!.slice(0, 3)
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
