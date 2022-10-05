const useCurrencyFormat = (value: number) => {
    
    const amount = `${value.toString().substring(0,value.toString().length-2)}.${value.toString().substring(value.toString().length-2)}`;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(Number(amount))
}

export default useCurrencyFormat
