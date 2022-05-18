import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { get } from 'services/api/get'

import {
  MovieTemplate,
  MovieTemplateProps
} from 'templates/private/app/MovieTemplate'

import { Locale } from 'types/locale'
import { Cast, Crew } from 'types/movies/credits'
import { Images } from 'types/movies/images'
import { Details, Keyword } from 'types/movies/list'

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

  return {
    props: {
      details,
      keywords,
      cast: cast.filter((cast) => cast.profile_path),
      crew: crew.filter((crew) => crew.profile_path),
      images
    }
  }
}
