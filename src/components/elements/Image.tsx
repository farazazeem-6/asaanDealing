import Image from "next/image";
import { TAppImageProps } from "./types";

export const AppImage = ({
  src,
  alt,
  width,
  height,
  size,
  priority = false,
  borderRadius,
}: TAppImageProps) => {
  const finalWidth = size ?? width ?? 40;
  const finalHeight = size ?? height ?? 40;

  return (
    <Image
      src={src}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      priority={priority}
      style={{ borderRadius }}
    />
  );
};
