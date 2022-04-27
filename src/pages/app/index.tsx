import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { supabase } from 'services/supabase'

type AppProps = {}

const App = (props: AppProps) => {
  return (
    <LayoutPrivate>
      <h1>carregando...</h1>
    </LayoutPrivate>
  )
}

export default App

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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
