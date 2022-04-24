import { GetServerSideProps, GetStaticProps } from 'next'
import { supabase } from 'services/supabase'

const App = () => {
  return (
    <>
      <h1>oi</h1>{' '}
    </>
  )
}

export default App

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/login' } }
  }

  return { props: { user } }
}
