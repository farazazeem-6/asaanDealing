import { styled } from '@/theme';

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$rem$0_87',
  fontSize: '$rem$1',
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
      default: {
        background: 'none',
        color: '$main',
        '&:hover': {
          background: '$none',
        },
      },
      primary: {
        background: '$gradients$primaryButton',
        color: '$white',
        '&:hover': {
          background: '$gradients$primaryHover',
        },
      },
      gradientGreen: {
        background: '$$gradients$greenGradient1',
        color: '$white',
        '&:hover': {
          background: '$gradients$greenGradient2',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$textOnHover',
        border: '$px$1 solid $borderGreen',
        '&:hover': {
          backgroundColor: '$btnHover',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$dGreen',
        '&:hover': {
          backgroundColor: '$ghostBtn',
        },
      },
    },

    size: {
      sm: {
        padding: '$rem$0_37 $rem$0_75',
        fontSize: '$rem$0_75',
      },
      md: {
        padding: '$rem$1_25 $rem$1',
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
