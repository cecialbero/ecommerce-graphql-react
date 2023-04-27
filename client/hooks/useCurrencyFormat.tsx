const useCurrencyFormat = (value: number) => {
    
    if(value) {
        const amount = `${value.toString().substring(0,value.toString().length-2)}.${value.toString().substring(value.toString().length-2)}`;

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formatter.format(Number(amount));
    }

    return '$0.00'
}

export default useCurrencyFormat
