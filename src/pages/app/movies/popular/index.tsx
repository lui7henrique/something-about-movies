import { User } from '@supabase/supabase-js'
import { LayoutPrivate } from 'layout/Private'
import { GetServerSideProps } from 'next'
import { supabase } from 'services/supabase'

type PopularProps = {}

const Popular = (props: PopularProps) => {
  return <LayoutPrivate />
}

export default Popular

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: {} }
}
