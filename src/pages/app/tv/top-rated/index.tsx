import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'

type TopRatedProps = {}

const TopRated = (props: TopRatedProps) => {
  return <LayoutPrivate />
}

export default TopRated

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: {} }
}
