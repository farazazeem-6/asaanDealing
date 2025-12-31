import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import lightThemeOpt from './light-theme';
import darkThemeOpt from './dark-theme';
import commonTheme from './common';

const stitches = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    colors: {
      ...commonTheme.theme.colors,
      ...lightThemeOpt.colors,
    },
  },
});

export const { styled, globalCss, createTheme, theme, config, css, keyframes } =
  stitches;

export const lightTheme = createTheme('light', lightThemeOpt);
export const darkTheme = createTheme('dark', darkThemeOpt);

export type CSS = Stitches.CSS<typeof config>;
