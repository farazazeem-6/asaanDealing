export const generateUrlParams = <T extends Record<string, unknown>>(
  payload: T,
): string => {
  const params = new URLSearchParams();

  // Helper function to handle recursion
  const addParam = (key: string, value: unknown): void => {
    if (value === undefined || value === null || value === '') return;

    if (typeof value === 'object' && !Array.isArray(value)) {
      Object.entries(value as Record<string, unknown>).forEach(
        ([nestedKey, nestedValue]) => {
          addParam(`${key}${nestedKey}`, nestedValue);
        },
      );
    } else {
      params.append(key, String(value));
    }
  };

  for (const key in payload) {
    if (Object.prototype.hasOwnProperty.call(payload, key)) {
      const value = payload[key];
      addParam(key, value);
    }
  }

  return params.toString();
};
