import { styled } from '@/theme';
import { Box } from './Box';

export const Container = styled(Box, {
  flexShrink: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '$px$20',

  variants: {
    size: {
      xs: {
        maxWidth: '$breakpoints$xs',
      },
      sm: {
        maxWidth: '$breakpoints$sm',
      },
      md: {
        maxWidth: '$breakpoints$md',
      },
      lg: {
        maxWidth: '$breakpoints$lg',
      },
      fluid: {
        maxWidth: 'none',
      },
    },
  },
  defaultVariants: {
    size: 'fluid',
  },
});
