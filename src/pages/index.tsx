import { LayoutPublic } from 'layout/Public'
import { GetStaticProps } from 'next'
import { list, Locale } from 'services/api'
import { HomeTemplate } from 'templates/public/HomeTemplate'
import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'

type HomeProps = {
  movies: Movie[]
  tv: TV[]
}

const Home = (props: HomeProps) => {
  const { movies, tv } = props

  return (
    <LayoutPublic>
      <HomeTemplate movies={movies} tv={tv} />
    </LayoutPublic>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const movies = await list<Movie[]>(locale as Locale, '/movie/popular')
  const tv = await list<TV[]>(locale as Locale, '/tv/popular')

  return {
    props: {
      movies: movies!.slice(0, 3),
      tv: tv!.slice(0, 3)
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
