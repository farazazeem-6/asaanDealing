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
  sizes?: string;
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
  fill,
  sizes,
  ...props
}: TNextImageProps & { fill?: boolean }) => {
  const dimensions = fill
    ? {
        fill: true,
        sizes: sizes || '100vw',
      }
    : {
        width: size ?? width ?? 40,
        height: size ?? height ?? 40,
      };

  return (
    <StyledNextImageWrapper
      src={src}
      alt={alt || ''}
      priority={priority}
      style={style}
      css={{
        borderRadius: borderRadius,
        ...css,
      }}
      {...dimensions}
      {...props}
    />
  );
};
