import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { get, Locale } from 'services/api'
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
