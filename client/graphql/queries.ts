import { gql } from '@apollo/client';

export const PRODUCTS = gql`
    query {
        products {
            items {
                id
                name
                description
                assets {
                    source
                }
                variants {
                    id
                    price
                }
            }
        }
    }
`

export const PRODUCT = gql`
    query getProduct($id: ID!){
        product(id: $id) {
            name
            description
            assets {
                source
            }
            collections {
            name
            }
            variants {
            id
            price
            priceWithTax
            currencyCode
            }
        }
    }
`

export const ACTIVE_ORDER = gql`
    query {
        activeOrder {
            subTotal
            totalQuantity
        }
    }
`
