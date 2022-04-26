import { User } from '@supabase/supabase-js'
import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { list, Locale } from 'services/api'
import { supabase } from 'services/supabase'
import {
  AppHomeTemplate,
  AppHomeTemplateProps
} from 'templates/private/app/AppTemplate'
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
  const popularMovies = await list<Movie[]>(locale as Locale, '/movie/popular')

  const popularTV = await list<TV[]>(locale as Locale, '/tv/popular')

  const banners = [
    ...popularMovies!.slice(0, 2),
    ...popularTV!.slice(0, 2)
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

  return {
    props: {
      banners
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
