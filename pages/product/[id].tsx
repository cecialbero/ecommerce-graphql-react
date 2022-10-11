import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { PRODUCT } from '../../graphql/queries';
import { Carousel, ProductDetails } from '../../components';

import { Container } from '../../styles/Grid';
import { Alert } from '../../styles/Alert';
import { Loading } from '../../styles/Loading';

const Product: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery(PRODUCT, {
        variables: { id }
    });

    if(error) {
        return <Alert error>Ups, looks like there is an error</Alert>
    }

    if(loading) {
        return <Loading>Loading data...</Loading>
    }
    
    return (
        <Container>
            <Carousel/>
            <ProductDetails {...data}/>
        </Container>
    )
}

export default Product
