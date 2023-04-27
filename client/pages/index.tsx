import type { NextPage } from 'next'

import { ProductsList } from '../components'

import { Container } from '../styles/Grid'

const Home: NextPage = () => {
  return (
    <Container>
      <ProductsList />
    </Container>
  )
}

export default Home
