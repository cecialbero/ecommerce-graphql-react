const useDecimal = (value: number | string, decimalAmount: number) => {
    
    return `${value.toString().substring(0,value.toString().length-decimalAmount)}.${value.toString().substring(value.toString().length-decimalAmount)}`;
}

export default useDecimal