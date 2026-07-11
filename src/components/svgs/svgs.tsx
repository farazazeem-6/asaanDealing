import { CSS, styled } from '@/theme';
import { SVGAttributes } from 'react';

const Svg = styled('svg', {});

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  color?: string;
  css?: CSS;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  isEyeIcon?: boolean;
}

export const SvgPath = styled('path', {});
export default Svg;
