import { useMutation } from '@apollo/client';
import { Items } from '../../model';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import { ACTIVE_ORDER } from '../../graphql/queries';
import useDecimal from '../../hooks/useDecimal';

import { Button } from '../../styles/Button';
import { CardProduct, CardBottom, CardMedia, CardTitle, CardPrice  } from './Card-style';

interface Props {
  item: Items
}

const Card = ({item}: Props): JSX.Element => {
  const { name, variants, assets } = item;
  const price = useDecimal(variants[0].price, 2);
  
  /*const [ addToOrder ] = useMutation(ADD_ITEM_TO_ORDER, {
    refetchQueries: [ { query: ACTIVE_ORDER } ]
  })*/

  const [ addToOrder ] = useMutation(ADD_ITEM_TO_ORDER, {
    update: (cache, mutationResult) => {
      const data = cache.readQuery({
        query: ACTIVE_ORDER,
      });
      cache.writeQuery({
        query: ACTIVE_ORDER,
        data: {
          activeOrder: mutationResult.data.addItemToOrder,
        },
      });
    },
  });

  const handleOnClick = async () => {
    const productVariantId = variants[0].id
    const quantity = 1
    const {data} = await addToOrder({ variables: {productVariantId, quantity} })

    console.log(data)
  }


  return (
    <CardProduct>
      <CardMedia imgUrl={assets[0].source}></CardMedia>
      <CardTitle>{name}</CardTitle>

      <CardBottom>
        <CardPrice>${price}</CardPrice>
        <Button onClick={handleOnClick}>Buy</Button>
      </CardBottom>
    </CardProduct>
  )
}

export default Card
