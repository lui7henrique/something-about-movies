import { User } from '@supabase/supabase-js'
import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { list, Locale } from 'services/api'
import { supabase } from 'services/supabase'
import { AppTemplate } from 'templates/private/app/AppTemplate'
import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'

export type AppPageProps = {
  popularMovies: Movie[]
  popularTV: TV[]
}

type AppProps = {
  user: User
} & AppPageProps

const App = (props: AppProps) => {
  const { user, ...appProps } = props

  return (
    <LayoutPrivate>
      <AppTemplate {...appProps} />
    </LayoutPrivate>
  )
}

export default App

export const getServerSideProps: GetServerSideProps = async ({
  req,
  locale
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/login' } }
  }

  const popularMovies = await list<Movie[]>(locale as Locale, '/movie/popular')

  const popularTV = await list<TV[]>(locale as Locale, '/tv/popular')

  return {
    props: {
      user,
      popularMovies: popularMovies?.slice(0, 2),
      popularTV: popularTV?.slice(0, 2)
    }
  }
}
