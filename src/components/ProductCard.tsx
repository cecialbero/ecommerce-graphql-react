import { useMutation } from '@apollo/client';
import { Items } from './../model';
import { Button } from '../styled-components/Button';
import { Card, CardBottom, CardMedia  } from '../styled-components/Card';
import { ADD_ITEM_TO_ORDER } from './../graphql/mutations';
import { ACTIVE_ORDER } from './../graphql/queries';

interface Props {
  item: Items
}

export const ProductCard = ({item}: Props): JSX.Element => {
  const { name, description, variants, assets } = item
  
  const [ addToOrder ] = useMutation(ADD_ITEM_TO_ORDER, {
    refetchQueries: [ { query: ACTIVE_ORDER } ]
  })

  const handleOnClick = () => {
    const productVariantId = variants[0].id
    const quantity = 1
    addToOrder({ variables: {productVariantId, quantity} })
  }


  return (
    <Card>
      <CardMedia imgUrl={assets[0].source}></CardMedia>
      <h2>{name}</h2>
      <p>{description}</p>
      <CardBottom>
        <h4>${variants[0].price}</h4>
        <Button onClick={handleOnClick}>Buy</Button>
      </CardBottom>
    </Card>
  )
}
