import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'

type ComingSoonProps = {}

const ComingSoon = (props: ComingSoonProps) => {
  return <LayoutPrivate />
}

export default ComingSoon

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: {} }
}
