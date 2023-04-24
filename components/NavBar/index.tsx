import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@apollo/client';

import { ACTIVE_ORDER } from '../../graphql/queries';
import useCurrencyFormat from '../../hooks/useCurrencyFormat';

import { Search } from '../index';
import { Header, HeaderLogo, HeaderOrder, Cart, Circle } from './NavBar-style';
// import useStateWithStorage from '../../hooks/useStateWithStorage';

const NavBar = () => {
  const [order, setOrder] = useState('0');
  const [quantity, setQuantity] = useState(0);
  const {error, data} = useQuery(ACTIVE_ORDER);

  useEffect(() => {
    if(data) {
      const price = useCurrencyFormat(data?.activeOrder?.subTotal);
      setOrder(price);
      setQuantity(data.activeOrder.totalQuantity);
    }
  }, [data, setOrder])

  return (
    <Header>
      <Link href="/">
        <HeaderLogo>
          <Image
            src='/img/e-commerce.png'
            alt='e-commerce'
            width={50}
            height={57}
          />
          <h1>ShopApp</h1>
        </HeaderLogo>
      </Link>
      <Search />
      
      <HeaderOrder>
        <Cart>
          <Image
            src='/img/cart.svg'
            alt='cart'
            width={27}
            height={27}
          />
          <Circle>{ quantity | 0 }</Circle>
        </Cart>
        {data && <p>{ order }</p>}
        {error && <p>$0</p>}
      </HeaderOrder>
    </Header>
  );
}

export default NavBar
