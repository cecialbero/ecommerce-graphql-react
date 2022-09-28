import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client';

import { ACTIVE_ORDER } from '../../graphql/queries';

import { Search } from '../index';
import { Alert } from '../../styles/Alert';
import { Header, HeaderLogo, HeaderOrder, Cart, Circle } from './NavBar-style';
// import useStateWithStorage from '../../hooks/useStateWithStorage';

const NavBar = () => {
  const [order, setOrder] = useState(0);
  const [itemNumber, setItemNumber] = useState(0);
  const {loading, error, data} = useQuery(ACTIVE_ORDER);

  useEffect(() => {
    if(data) {
      setOrder(data?.activeOrder?.subTotal)
    }
  }, [data, setOrder])

  return (
    <Header>
      <HeaderLogo>
        <Image
          src='/img/e-commerce.png'
          alt='e-commerce'
          width={50}
          height={57}
        />
        <h1>ShoppApp</h1>
      </HeaderLogo>

      <Search />
      
      <HeaderOrder>
        <Cart>
          <Image
            src='/img/cart.svg'
            alt='cart'
            width={27}
            height={27}
          />
          <Circle>{ itemNumber }</Circle>
        </Cart>
        <p>{ order || '$0.00' }</p>
      </HeaderOrder>
      {error && <Alert error>Ups, looks like there is an error</Alert>}
    </Header>
  );
}

export default NavBar
