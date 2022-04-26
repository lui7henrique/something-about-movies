import { User } from '@supabase/supabase-js'
import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { supabase } from 'services/supabase'

type NowPlayingProps = {
  user: User
}

const NowPlaying = (props: NowPlayingProps) => {
  return <LayoutPrivate />
}

export default NowPlaying

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/login' } }
  }

  return { props: { user } }
}
