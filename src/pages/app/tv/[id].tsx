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
      <TvTemplate {...props} />
    </LayoutPrivate>
  )
}

export default TV

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale
}) => {
  const id = params?.id

  /*
  |-----------------------------------------------------------------------------
  | Redirect to home if no id
  |-----------------------------------------------------------------------------
  |
  |
  */

  if (!id) {
    return {
      props: {},
      redirect: {
        destination: '/app/404'
      }
    }
  }

  /*
  |-----------------------------------------------------------------------------
  | Request to get tv details
  |-----------------------------------------------------------------------------
  |
  |
  */
  const details = await get<Details>(locale as Locale, `/tv/${id}`)

  return {
    props: {
      details
    }
  }
}
