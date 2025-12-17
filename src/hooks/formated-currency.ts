export const FormateCurrency = (currency: number) => {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(currency);
};