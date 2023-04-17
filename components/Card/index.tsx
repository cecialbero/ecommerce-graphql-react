import Link from 'next/link';
import { useMutation } from '@apollo/client';

import { Product } from '../../model';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import { ACTIVE_ORDER } from '../../graphql/queries';
import useCurrencyFormat from '../../hooks/useCurrencyFormat';
import { BgImage } from '../../styles/BgImage';

import { CardButton, CardProduct, CardBottom, CardTitle, CardPrice  } from './Card-style';

interface Props {
  product: Product
}

const Card = ({product}: Props): JSX.Element => {
  const { name, variants, assets } = product;
  const price = useCurrencyFormat(variants[0].price);
  
  const [ addToOrder ] = useMutation(ADD_ITEM_TO_ORDER, {
    refetchQueries: [ { query: ACTIVE_ORDER } ]
  })

  const handleOnClick = () => {
    const productVariantId = variants[0].id;
    const quantity = 1;
    addToOrder({ variables: {productVariantId, quantity} });
  }


  return (
    <CardProduct>
      <Link href={{
          pathname: '/product/[id]',
          query: { id: product.id },
        }} 
        key={product.id}
      >
        <a>
          <BgImage imgUrl={assets[0].source} imgHeight="300px"/>

          <CardBottom>
            <CardTitle>{name}</CardTitle>
            <CardPrice>{price}</CardPrice>
          </CardBottom>
        </a>
      </Link>
      <CardButton onClick={handleOnClick}>Buy</CardButton>
    </CardProduct>
  )
}

export default Card
