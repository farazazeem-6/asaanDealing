import { slate, blackAlpha, blue, blueDark, green, red } from './colors';
const lightThemeOpt = {
  colors: {
    text: '#000',
    background: '#ffffff',
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
