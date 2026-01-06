import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body': {
    backgroundColor: '$background',
    color: '$text',
    minHeight: '$dvh$100',
    fontSize: 'clamp(12px, 1vw, 16px)',
  },

  input: { fontSize: '16px !important' },
  textarea: { fontSize: '16px !important' },
  select: { fontSize: '16px !important' },
});
