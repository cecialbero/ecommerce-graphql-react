import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@apollo/client';

import { ACTIVE_ORDER } from '../../graphql/queries';
import useCurrencyFormat from '../../hooks/useCurrencyFormat';

import { Search } from '../index';
import { Header, HeaderLogo, HeaderOrder, Cart, Circle } from './NavBar-style';

const NavBar = () => {
  const {error, data} = useQuery(ACTIVE_ORDER);
  
  const order = useMemo(() => useCurrencyFormat(data?.activeOrder?.subTotal || '0'), [data]);
  const quantity = useMemo(() => data?.activeOrder?.totalQuantity || 0, [data]);

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
