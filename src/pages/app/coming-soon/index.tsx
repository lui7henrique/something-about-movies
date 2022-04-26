import { User } from '@supabase/supabase-js'
import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { supabase } from 'services/supabase'

type ComingSoonProps = {
  user: User
}

const ComingSoon = (props: ComingSoonProps) => {
  return <LayoutPrivate />
}

export default ComingSoon

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/login' } }
  }

  return { props: { user } }
}
