export const formatAmount = (amount: number): string => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const parseAmount = (loanAmount: String): number => {
  return parseInt(loanAmount.replace(/,/g, ""), 10);
};