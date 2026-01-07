import React from 'react';
import { FloatingImage, ImageWrapper } from './style';
import { images } from '@/constants';

const HeroImageSliderComponent = ({ activeIndex }: { activeIndex: number }) => {
  const currentImage = activeIndex % images.length;

  return (
    <ImageWrapper>
      {images.map((src, index) => (
        <FloatingImage
          key={src}
          src={src}
          alt="Hero"
          width={400}
          height={440}
          style={{ borderRadius: '50px' }}
          data-active={index === currentImage}
        />
      ))}
    </ImageWrapper>
  );
};

HeroImageSliderComponent.displayName = 'HeroImageSlider';

export const HeroImageSlider = React.memo(HeroImageSliderComponent);
