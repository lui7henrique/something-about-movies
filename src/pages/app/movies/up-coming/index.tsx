import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'

type UpComingProps = {}

const UpComing = (props: UpComingProps) => {
  return <LayoutPrivate />
}

export default UpComing

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: {} }
}
