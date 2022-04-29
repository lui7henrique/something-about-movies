import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { list } from 'services/api/list'
import { Locale } from 'services/api/types'
import { LoginTemplate } from 'templates/public/LoginTemplate'

import { Movie } from 'types/movies/list'
import { TV } from 'types/tv/list'

type LoginProps = {
  movies: Movie[]
  tv: TV[]
}

const Login = (props: LoginProps) => {
  const { movies, tv } = props
  const { locale } = useRouter()

  const featuredMedia = useMemo(
    () =>
      [...movies, ...tv].map((item) => {
        const title = (item as any).title || (item as any).name

        return {
          id: item.id,
          image: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
          title: title as string,
          description: item.overview
        }
      }),
    [locale]
  )

  return <LoginTemplate featuredMedia={featuredMedia} />
}

export default Login

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const movies = await list<Movie[]>(locale as Locale, '/movie/popular')
  const tv = await list<TV[]>(locale as Locale, '/tv/popular')

  return {
    props: {
      movies: movies!.slice(0, 2),
      tv: tv!.slice(0, 2)
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}
