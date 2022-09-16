import { ProductCard } from "./ProductCard";
import { Products } from './../model';
import { Col } from './../styled-components/Grid'

interface Props {
  products: Products
}

export const ProductList = ({products}: Props): JSX.Element => {
  const {items} = products

  return (
    <>
      <h1>Hot Trending Products</h1>
      <Col>
        {items && items.map((item) => {
          return (
            <ProductCard item={item} key={item.id}></ProductCard>
          )
        })}
      </Col>
    </>
  );
}
