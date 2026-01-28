export const generateUniqueIds = (count: number, prefix = 'skel'): string[] => {
  const timestamp = Date.now();
  const ids: string[] = [];

  let current = 0;
  while (current < count) {
    ids.push(`${prefix}-${timestamp}-${current.toString(36)}`);
    current++;
  }

  return ids;
};
