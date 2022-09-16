import { screen, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Card } from '../';
import { Items } from '../../model';

const item: Items = {
    id: '3',
    description: 'This is a description',
    name: 'Laptop',
    variants: [{
        price: 30,
        id: '4'
    }],
    assets: [{
        source: 'image/path'
    }]
}

beforeEach(() => {
    return (
        render(
            <MockedProvider mocks={[]} addTypename={false}>
                <Card item={item} key={item.id}></Card>
            </MockedProvider>
        )
    )
})

describe('ProductCard', () => {
    it('must render a name, description and buy button', async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));

        const buyBtn = screen.getByRole('button', {name: /buy/i});
        const name = screen.getByText(/laptop/i);
        const description = screen.getByText(/This is a description/i);

        expect(description).toBeInTheDocument;
        expect(name).toBeInTheDocument;
        expect(buyBtn).toBeEnabled;
    });
})