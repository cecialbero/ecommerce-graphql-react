import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client';

import { ACTIVE_ORDER } from '../../graphql/queries';
import useCurrencyFormat from '../../hooks/useCurrencyFormat';

import { Search } from '../index';
import { Alert } from '../../styles/Alert';
import { Header, HeaderLogo, HeaderOrder, Cart, Circle } from './NavBar-style';
// import useStateWithStorage from '../../hooks/useStateWithStorage';

type NavBarProps = {
  onSearch: Function
}

const NavBar = ({ onSearch }: NavBarProps) => {
  const [order, setOrder] = useState('0');
  const [quantity, setQuantity] = useState(0);
  const {error, data} = useQuery(ACTIVE_ORDER);

  const getSearchTerm = (term: string) => {
    onSearch(term)
  }

  useEffect(() => {
    if(data) {
      const price = useCurrencyFormat(data?.activeOrder?.subTotal);
      setOrder(price);
      setQuantity(data.activeOrder.totalQuantity);
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
        <h1>ShopApp</h1>
      </HeaderLogo>

      <Search onSearch={getSearchTerm}/>
      
      <HeaderOrder>
        <Cart>
          <Image
            src='/img/cart.svg'
            alt='cart'
            width={27}
            height={27}
          />
          <Circle>{ quantity }</Circle>
        </Cart>
        <p>{ order }</p>
      </HeaderOrder>
      {error && <Alert error>Ups, looks like there is an error</Alert>}
    </Header>
  );
}

export default NavBar
