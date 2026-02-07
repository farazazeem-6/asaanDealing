import { ReactNode } from 'react';

export type TStickyPageHeaderProps = {
  heading?: ReactNode;
  children?: ReactNode;
  zIndex?: number;
  topOffset?: string | number;
  isSticky?: boolean;
  border?: boolean;
};
