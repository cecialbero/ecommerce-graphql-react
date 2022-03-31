import { gql } from '@apollo/client'

export const ADD_ITEM_TO_ORDER = gql `
mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
  addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
    ... on Order {
      subTotal
    }
  }
}
`
