import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'

type WatchListProps = {}

const WatchList = (props: WatchListProps) => {
  return <LayoutPrivate />
}

export default WatchList

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: {} }
}
