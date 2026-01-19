import Image from 'next/image';
import { styled } from '@/theme';
import { TAppImageProps } from './types';

const StyledImage = styled(Image, {});

type NextImageProps = TAppImageProps & React.ComponentProps<typeof StyledImage>;

export const NextImage = ({
  src,
  alt,
  width,
  height,
  size,
  priority = false,
  borderRadius,
  css,
}: NextImageProps) => {
  const finalWidth = size ?? width ?? 40;
  const finalHeight = size ?? height ?? 40;

  return (
    <StyledImage
      src={src}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      priority={priority}
      css={{
        borderRadius: borderRadius,
        ...css,
      }}
    />
  );
};
