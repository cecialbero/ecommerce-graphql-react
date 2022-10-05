import { useMutation } from '@apollo/client';
import { Items } from '../../model';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import { ACTIVE_ORDER } from '../../graphql/queries';
import useCurrencyFormat from '../../hooks/useCurrencyFormat';

import { Button } from '../../styles/Button';
import { CardProduct, CardBottom, CardMedia, CardTitle, CardPrice  } from './Card-style';

interface Props {
  item: Items
}

const Card = ({item}: Props): JSX.Element => {
  const { name, variants, assets } = item;
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
      <CardMedia imgUrl={assets[0].source}></CardMedia>
      <CardTitle>{name}</CardTitle>

      <CardBottom>
        <CardPrice>{price}</CardPrice>
        <Button onClick={handleOnClick}>Buy</Button>
      </CardBottom>
    </CardProduct>
  )
}

export default Card
