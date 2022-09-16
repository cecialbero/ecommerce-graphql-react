import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { ProductList } from './components/ProductList';
import { PRODUCTS } from './graphql/queries';
import { Products } from './model';

const products: Products = {
  items: [{
    id: '2',
    description: 'This is the description',
    name: 'Laptop',
    variants: [{
      price: 300,
      id: '3'
    }],
    assets: [{
      source: 'image/path'
    }]
  }]
}

const mocksData = [
  {
    request: {
      query: PRODUCTS,
    },
    result: {
      data: {
        products: {
          items: [{
            id: '2',
            description: 'This is the description',
            name: 'Laptop',
            variants: [{
              price: 300,
              id: '3'
            }],
            assets: [{
              source: 'image/path'
            }]
          }]
        }
      }
    }
  }
]

describe('ProductList', () => {
  it('must render a product list component with data and no error', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductList products={products}/>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
  });
});
