import { User } from '@supabase/supabase-js'
import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { supabase } from 'services/supabase'

type AppProps = {
  user: User
}

const App = (props: AppProps) => {
  const { user } = props

  return (
    <LayoutPrivate>
      <h1>carregando...</h1>
    </LayoutPrivate>
  )
}

export default App

export const getServerSideProps: GetServerSideProps = async ({
  req,
  locale
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/login' } }
  }

  return {
    props: {},
    redirect: {
      destination: '/app/home'
    }
  }
}
