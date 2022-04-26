import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'

type CommunityProps = {}

const Community = (props: CommunityProps) => {
  return <LayoutPrivate />
}

export default Community

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: {} }
}
