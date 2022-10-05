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

export const ACTIVE_ORDER = gql`
    query {
        activeOrder {
            subTotal
            totalQuantity
        }
    }
`
