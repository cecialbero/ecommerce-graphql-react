import type { NextPage } from 'next';

import { ProductDetails, Carousel } from '../components';

import { Container } from '../styles/Grid';

const Product: NextPage = () => {
    return (
        <Container>
            <Carousel/>
            <ProductDetails />
        </Container>
    )
}

export default Product