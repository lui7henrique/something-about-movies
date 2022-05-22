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

  return {
    props: {}
  }
}
