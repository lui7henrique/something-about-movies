import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { get } from 'services/api/get'

type MoviesProps = {}

const Movies = (props: MoviesProps) => {
  return <LayoutPrivate></LayoutPrivate>
}

export default Movies

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

  /*
  |-----------------------------------------------------------------------------
  | Request to get movie details
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Request to get movie keywords
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Request to get movie credits
  |-----------------------------------------------------------------------------
  |
  |
  */

  return {
    props: {}
  }
}
