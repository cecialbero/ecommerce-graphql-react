import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ACTIVE_ORDER } from '../../graphql/queries';
import { Alert } from '../../styles/Alert';
// import useStateWithStorage from '../../hooks/useStateWithStorage';

const Header = () => {
  const [order, setOrder] = useState(0);
  const {loading, error, data} = useQuery(ACTIVE_ORDER);

  useEffect(() => {
    if(data) {
      setOrder(data?.activeOrder?.subTotal)
    }
  }, [data, setOrder])

  return (
    <header className='header'>
      <img
        src='./img/e-commerce.png'
        alt='e-commerce'
      />
      <div className='order-container'>
        <p>My cart</p>
        {
          loading
          ? <p>$0</p>
          : <p>${order}</p>
        }
        {
          error && <Alert error>Ups, looks like there is an error</Alert>
        }
      </div>
    </header>
  );
}

export default Header
