import { Card } from "../";
import { Products } from '../../model';
import { Col } from '../../styles/Grid'

interface Props {
  products: Products
}

const ProductList = ({products}: Props): JSX.Element => {
  const {items} = products

  return (
    <>
      <h1>Hot Trending Products</h1>
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
