export const formatNumberWithCommas = (value: number) => {
  if (value === null || value === undefined) return '';

  return Number(value).toLocaleString();
};
