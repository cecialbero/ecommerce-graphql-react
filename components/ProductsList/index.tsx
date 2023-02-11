import { useMemo } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'

import { PRODUCTS } from '../../graphql/queries'

import { Card } from ".."
import { Product } from '../../model'

import { Row } from '../../styles/Grid'
import { Alert } from '../../styles/Alert'
import { Loading } from '../../styles/Loading'

const ProductsList = (): JSX.Element => {
  const { loading, error, data } = useQuery(PRODUCTS);
  const products = useMemo(() => data?.products?.items ?? [], [data]);
  const filterTerm = useSelector(((state: any) => state.filter.term));
  const filteredItems = products.filter((product: Product) => product.name.toLowerCase().includes(filterTerm));

  if(error) {
    return <Alert error>Ups, looks like there is an error. Please, try again later</Alert>
  }

  return (
    <>
      {loading 
      ? <Loading>Loading...</Loading>
      : <>
          <h2>Hot Trending Products</h2>
          <Row md={2} sm={3} lg={4}>
            {filteredItems.length
              ? filteredItems.map((product: Product) => {
                return (
                  <Link href={{
                      pathname: '/product/[id]',
                      query: { id: product.id },
                    }} 
                    key={product.id}
                  >
                    <a>
                      <Card product={product}></Card>
                    </a>
                  </Link>
                )
              })
              : <Alert error>No results for {filterTerm}</Alert>
            }
          </Row>
        </>
      }
    </>
  );
}

export default ProductsList
