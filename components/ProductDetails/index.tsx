import { Product } from '../../model';

import useCurrencyFormat from '../../hooks/useCurrencyFormat';

type Props = {
    product: Product
}

const ProductDetails = ({ product }: Props) => {
    const { name, description, variants } = product;
    const productPrice = useCurrencyFormat(variants[0].price);

    return (
        <section>
            <h2>{name}</h2>
            <p>{description}</p>
            <article>
                <p>Total price</p>
                <h4>{productPrice}</h4>
            </article>
        </section>
    )
}

export default ProductDetails
