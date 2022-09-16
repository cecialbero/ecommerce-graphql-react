import { createContext } from 'react';

interface OrderContext {
    order: string,
    loading: boolean,
    error: any
}

const defaultState = {
    order: '0',
    loading: false,
    error: undefined
};

const orderContext = createContext<OrderContext>(defaultState);

export default orderContext