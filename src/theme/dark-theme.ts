import { slate, blackAlpha, blue, blueDark, green, red } from './colors';

const darkThemeOpt = {
  colors: {
    text: 'white',
    background: '#0e1729',
    border: 'rgba(138,138,138,0.1)',
    selectorHover: '#1a2436',
    card: '#1b2336',
    overlay: ' rgba(0, 0, 0, 0.5)',
    ...slate,
    ...blackAlpha,
    ...blue,
    ...blueDark,
    ...green,
    ...red,
  },
  opacity: {
    mid: '$ul$0.5',
  },
};

export default darkThemeOpt;
