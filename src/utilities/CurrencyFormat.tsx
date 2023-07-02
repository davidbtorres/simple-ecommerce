const CurrencyFormatUS = ({ value }: { value: number }) => {
    const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);

    return <span>{formattedValue}</span>
}

export default CurrencyFormatUS;