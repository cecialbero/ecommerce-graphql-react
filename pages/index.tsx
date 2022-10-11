import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';

import { PRODUCTS } from '../graphql/queries';

import { NavBar, ProductsList } from '../components';

import { Container } from '../styles/Grid';
import { Loading } from '../styles/Loading';
import { Alert } from '../styles/Alert';

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState('');

  const filterProducts = (filter: string) => {
    setFilteredProducts(filter)
  }

  if(error) {
    return <Alert error>Ups, looks like there is an error</Alert>
  }

  return (
    <>
      <NavBar onSearch={filterProducts}/>
      <Container>
        {loading
          ? <Loading>Loading data...</Loading>
          : <ProductsList {...data} filterTerm={filteredProducts}></ProductsList>
        }
      </Container>
    </>
  )
}

export default Home
