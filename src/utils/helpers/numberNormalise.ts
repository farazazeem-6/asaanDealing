export const formatNumberWithCommas = (value: number | string) => {
  if (value === null || value === undefined) return '';

  return Number(value).toLocaleString();
};
