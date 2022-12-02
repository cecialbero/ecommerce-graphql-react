import type { NextPage } from 'next'
import { useQuery } from '@apollo/client'

import { PRODUCTS } from '../graphql/queries'

import { ProductsList } from '../components'

import { Container } from '../styles/Grid'
import { Loading } from '../styles/Loading'
import { Alert } from '../styles/Alert'

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(PRODUCTS);

  if(error) {
    return <Alert error>Ups, looks like there is an error</Alert>
  }

  return (
    <>
      <Container>
        {loading
          ? <Loading>Loading data...</Loading>
          : <ProductsList {...data}></ProductsList>
        }
      </Container>
    </>
  )
}

export default Home
