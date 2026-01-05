export type TInputFieldProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'size'
> & {
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
  inputSize?: 'sm' | 'md' | 'lg';
};
