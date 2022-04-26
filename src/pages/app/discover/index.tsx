import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'

type ExploreProps = {}

const Explore = (props: ExploreProps) => {
  return <LayoutPrivate />
}

export default Explore

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: {} }
}
