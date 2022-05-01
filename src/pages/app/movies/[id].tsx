import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { get } from 'services/api/get'

import {
  MovieTemplate,
  MovieTemplateProps
} from 'templates/private/app/MovieTemplate'

import { Locale } from 'types/locale'
import { Details } from 'types/movies/list'

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
  | Request to get movie details
  |-----------------------------------------------------------------------------
  |
  |
  */
  const details = await get<Details>(locale as Locale, `/movie/${id}`)

  return {
    props: {
      details
    }
  }
}
