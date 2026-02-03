import Image, { ImageProps as NextImagePropsRaw } from 'next/image';
import { styled } from '@/theme';
import { CSS } from '@stitches/react';

const StyledNativeImage = styled('img', {
  display: 'block',
  maxWidth: '$percent$100',
  height: 'auto',
});

const StyledNextImageWrapper = styled(Image, {});

// For HtmlImage (Flexible)
type THtmlImageProps = React.ComponentProps<typeof StyledNativeImage> & {
  css?: CSS;
  borderRadius?: string | number;
  size?: number | string;
};

// For NextImage (Strict Numbers)
type TNextImageProps = Omit<NextImagePropsRaw, 'width' | 'height'> & {
  css?: CSS;
  borderRadius?: string | number;
  size?: number;
  width?: number;
  height?: number;
};

// Components

export const HtmlImage = ({
  src,
  alt,
  css,
  borderRadius,
  size,
  ...props
}: THtmlImageProps) => {
  return (
    <StyledNativeImage
      src={src}
      alt={alt || ''}
      css={{
        borderRadius: borderRadius,
        width: size,
        height: size,
        ...css,
      }}
      {...props}
    />
  );
};

export const NextImage = ({
  src,
  alt,
  width,
  height,
  size,
  priority = false,
  borderRadius,
  css,
  style,
  ...props
}: TNextImageProps) => {
  const finalWidth = size ?? width ?? 40;
  const finalHeight = size ?? height ?? 40;

  return (
    <StyledNextImageWrapper
      src={src}
      alt={alt || ''}
      width={finalWidth}
      height={finalHeight}
      priority={priority}
      style={style}
      css={{
        borderRadius: borderRadius,
        ...css,
      }}
      {...props}
    />
  );
};
