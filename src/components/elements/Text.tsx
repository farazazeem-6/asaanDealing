import { styled } from '@/theme';

export const Text = styled('span', {
  margin: '0',
  fontWeight: 400,

  variants: {
    color: {
      gray: {
        color: '$gray',
      },
      white: {
        color: '$white',
      },
      black: {
        color: '$black',
      },
      theme: {
        color: '$text',
      },
      muted: {
        color: '$muted',
      },
      error:{
        color:'$red1'
      }
    },
    heading: {
      h1: {
        fontSize: '$rem$3',
        '@xs_max': {
          fontSize: '$rem$2',
        },
      },
      h2: {
        fontSize: '$rem$2',
        '@xs_max': {
          fontSize: '$rem$2',
        },
      },
      h3: {
        fontSize: '$rem$1_75',
        '@xs_max': {
          fontSize: '$rem$1',
        },
      },
      h4: {
        fontSize: '$rem$1_31',
        '@xs_max': {
          fontSize: '$rem$1_18',
        },
      },
      h5: {
        fontSize: '$rem$0_93',
        '@xs_max': {
          fontSize: '$rem$0_81',
        },
      },
      h6: {
        fontSize: '$rem$0_81',
        '@xs_max': {
          fontSize: '$rem$0_62',
        },
      },
    },
    fontWeight: {
      thin: { fontWeight: '$fontWeight$thin' },
      light: { fontWeight: '$fontWeight$light' },
      normal: { fontWeight: '$fontWeight$normal' },
      medium: { fontWeight: '$fontWeight$medium' },
      semibold: { fontWeight: '$fontWeight$semibold' },
      bold: { fontWeight: '$fontWeight$bold' },
      extrabold: { fontWeight: '$fontWeight$extrabold' },
      black: { fontWeight: '$fontWeight$black' },
    },
    textSpacing: {
      primary: {
        letterSpacing: '$px$1',
      },
      secondary: {
        letterSpacing: '$px$2',
      },
    },
    truncate: {
      true: {
        display: 'inline-block',
        maxWidth: '15ch',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        verticalAlign: 'bottom',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});
