import { Card } from "../";
import { Products } from '../../model';
import { Col } from '../../styles/Grid';

interface Props {
  products: Products
}

const ProductList = ({products}: Props): JSX.Element => {
  const {items} = products;

  return (
    <>
      <h2>Hot Trending Products</h2>
      <Col>
        {items && items.map((item) => {
          return (
            <Card item={item} key={item.id}></Card>
          )
        })}
      </Col>
    </>
  );
}

export default ProductList
