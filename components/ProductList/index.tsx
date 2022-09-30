import { Card } from "../";
import { Products } from '../../model';
import { Col } from '../../styles/Grid';

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
        {items && filteredItems.map((item) => {
          return (
            <Card item={item} key={item.id}></Card>
          )
        })}
      </Col>
    </>
  );
}

export default ProductList
