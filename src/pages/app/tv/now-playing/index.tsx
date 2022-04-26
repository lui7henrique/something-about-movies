import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'

type NowPlayingProps = {}

const NowPlaying = (props: NowPlayingProps) => {
  return <LayoutPrivate />
}

export default NowPlaying

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: {} }
}
