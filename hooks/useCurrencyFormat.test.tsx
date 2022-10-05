import useCurrencyFormat from './useCurrencyFormat';

describe('useCurrencyFormat', () => {
    it('must return a string with 2 decimals', () => {
        const value = 12900;
        const decimal = useCurrencyFormat(value);

        expect(decimal).toBe('$129.00');
    })

    it('must return a string with a comma after 3 digits and 2 decimals', () => {
        const value = 129900;
        const comma = useCurrencyFormat(value);

        expect(comma).toBe('$1,299.00');
    })
})
