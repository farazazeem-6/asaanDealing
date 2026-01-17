export type TSelectComponentProps<T> = {
  options: T[];
  selected: T | null;
  getLabel: (item: T) => string;
  getKey: (item: T) => string | number;
  onChange: (item: T) => void;
  showIcon?: boolean; // optional globe icon
};
