import { Product } from '../../model';

type Props = {
    product: Product
}

const ProductDetails = ({ product }: Props) => {

    return (
        <section>
            <h2>Product Title</h2>
            <p>Description</p>
            <article>
                <p>Total price</p>
                <h4>$0.00</h4>
            </article>
        </section>
    )
}

export default ProductDetails
