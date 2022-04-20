
import { api } from '../services/api'
import { Product } from '../types/product'

type HomeProps = {
  products: Product[]
} & NextPage

const Home = (props: HomeProps) => {
  const { products } = props

  return <h1>oi</h1>
}

export default Home

