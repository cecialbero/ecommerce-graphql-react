import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ACTIVE_ORDER } from './../graphql/queries';
import { Alert } from './../styled-components/Alert';
import useStateWithStorage from './../hooks/useStateWithStorage';

import './Header.css'

export const Header = () => {
  const [order, setOrder] = useStateWithStorage('order', '0');
  const {loading, error, data} = useQuery(ACTIVE_ORDER)

  useEffect(() => {
    if(data) {
      setOrder(data?.activeOrder?.subTotal)
    }
  }, [data, setOrder])

  return (
    <header>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
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
