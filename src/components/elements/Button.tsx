import { styled } from '@/theme';

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$rem$0_62',
  fontSize: '$rem$0_93',
  fontWeight: '$fontWeight$semibold',
  borderRadius: '$px$8',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  userSelect: 'none',
  lineHeight: '$px$1',

  '&:disabled': {
    opacity: '$ul$0.5',
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      theme: {
        backgroundColor: '$background',
        color: '$text',
        border: '$px$1 solid $border',
      },
      green: {
        backgroundColor: '$green',
        color: '$text',
        border: '$px$1 solid $border',
      },
    },

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
        padding: '$rem$1_37 $rem$1_31',
        fontSize: '$rem$1',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
