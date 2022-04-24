import { User } from '@supabase/supabase-js'
import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps, GetStaticProps } from 'next'
import { supabase } from 'services/supabase'

type AppProps = {
  user: User
}

const App = (props: AppProps) => {
  return <LayoutPrivate />
}

export default App

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/login' } }
  }

  return { props: { user } }
}
