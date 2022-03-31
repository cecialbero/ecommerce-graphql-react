import { useEffect, FC } from 'react';
import { useQuery } from '@apollo/client';
import OrderContext from './orderContext';
import { ACTIVE_ORDER } from './../graphql/queries';
import useStateWithStorage from './../hooks/useStateWithStorage';

const OrderState: FC = ({ children }) => {
    const [order, setOrder] = useStateWithStorage('order', '0')
    const {loading, error, data} = useQuery(ACTIVE_ORDER)

    useEffect(() => {
        if(data) {
            setOrder(data?.activeOrder?.subTotal)
        }
    }, [data, setOrder])


    return <OrderContext.Provider value={{
        order,
        loading,
        error,
    }}>
        {children}
    </OrderContext.Provider>
}

export default OrderState