import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'

type TVProps = {}

const TV = (props: TVProps) => {
  return <LayoutPrivate>h1</LayoutPrivate>
}

export default TV

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const id = params?.id

  return { props: {} }
}
