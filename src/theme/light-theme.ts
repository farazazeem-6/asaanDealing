import { slate, blackAlpha, blue, blueDark, green, red } from './colors';
const lightThemeOpt = {
  colors: {
    text: '#black',
    background: '#FBFBFB',
    border: 'rgba(15, 15, 15, 0.1)',
    selectorHover: '#ddd7d7ff',
    card: '#fafafa',
    overlay: 'rgba(255, 255, 255, 0.1)',
    ...blackAlpha,
    ...slate,
    ...blueDark,
    ...blue,
    ...green,
    ...red,
  },
  opacity: {
    mid: '$ul$0.9',
  },
};

export default lightThemeOpt;
