import { slate, blackAlpha, blue, blueDark, green, red } from './colors';

const darkThemeOpt = {
  colors: {
    text: '#fff',
    background: '#000',
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
