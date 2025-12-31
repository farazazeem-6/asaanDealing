import { styled } from '@/theme';

export const Input = styled('input', {
  color: '$text',
  borderRadius: '$px$8',
  backgroundColor: '$background',
  width: '$percent$100',
  outline: '1px solid $border',
  border: '$px$1 solid $border',
  paddingRight: '$rem$1',

  variants: {
    size: {
      sm: {
        padding: '$rem$0_37 $rem$0_75',
        fontSize: '$rem$0_75',
      },
      md: {
        padding: '$rem$1 $rem$1',
        fontSize: '$rem$0_87',
      },
      lg: {
        padding: '$rem$1_25 $rem$1',
        fontSize: '$rem$1_06',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
