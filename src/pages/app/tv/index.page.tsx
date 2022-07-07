import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { get } from 'services/api/get'
import { TvTemplate, TvTemplateProps } from 'templates/private/app/TvTemplate'
import { Locale } from 'types/locale'
import { Details } from 'types/tv/list'

type TVProps = TvTemplateProps

const TV = (props: TVProps) => {
  return (
    <LayoutPrivate>
      <h1>oi</h1>
    </LayoutPrivate>
  )
}

export default TV

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  /*
  |-----------------------------------------------------------------------------
  | Redirect to home if no id
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Request to get tv details
  |-----------------------------------------------------------------------------
  |
  |
  */

  return {
    props: {}
  }
}
