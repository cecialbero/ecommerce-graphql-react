import { Card } from "../";
import { Products } from '../../model';
import { Row } from '../../styles/Grid';
import { Alert } from '../../styles/Alert';

type Props = {
  products: Products;
  filterTerm: string;
}

const ProductList = ({products, filterTerm}: Props): JSX.Element => {
  const {items} = products;
  
  const filteredItems = items.filter(item => item.name.includes(filterTerm));

  return (
    <>
      <h2>Hot Trending Products</h2>
      <Row md={2} sm={3}>
        {filteredItems.length 
          ? filteredItems.map((item) => {
            return (
              <Card item={item} key={item.id}></Card>
            )
          })
          : <Alert error>No results for {filterTerm}</Alert>
        }
      </Row>
    </>
  );
}

export default ProductList
