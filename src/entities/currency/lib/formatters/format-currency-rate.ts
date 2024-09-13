export const formatCurrencyRate = (
  rate: number,
  currencySymbol: string = '$',
  decimals: number = 2,
): string => {
  const formattedRate = rate.toFixed(decimals);

  return `${currencySymbol} ${formattedRate}`;
};
