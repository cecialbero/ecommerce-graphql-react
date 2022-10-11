import Link from 'next/link';

import { Card } from "..";
import { Products } from '../../model';

import { Row } from '../../styles/Grid';
import { Alert } from '../../styles/Alert';

type Props = {
  products: Products;
  filterTerm: string;
}

const ProductsList = ({products, filterTerm}: Props): JSX.Element => {
  const {items} = products;
  
  const filteredItems = items.filter(product => product.name.toLowerCase().includes(filterTerm));

  return (
    <>
      <h2>Hot Trending Products</h2>
      <Row md={2} sm={3} lg={4}>
        {filteredItems.length 
          ? filteredItems.map((product) => {
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
  );
}

export default ProductsList
