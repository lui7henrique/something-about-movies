import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { redirect } from 'next/dist/server/api-utils'

type MovieProps = {}

const Movie = (props: MovieProps) => {
  return <LayoutPrivate>h1</LayoutPrivate>
}

export default Movie

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
  | Request to get initial movie detail's
  |-----------------------------------------------------------------------------
  |
  |
  */
  console.log(id)

  return { props: {} }
}
