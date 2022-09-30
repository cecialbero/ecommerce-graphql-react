import { Card } from "../";
import { Products } from '../../model';
import { Col } from '../../styles/Grid';
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
      <Col>
        {filteredItems.length 
          ? filteredItems.map((item) => {
            return (
              <Card item={item} key={item.id}></Card>
            )
          })
          : <Alert error>No results for {filterTerm}</Alert>
        }
      </Col>
    </>
  );
}

export default ProductList
