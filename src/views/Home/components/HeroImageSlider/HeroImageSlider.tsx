import React from 'react';
import {
  FloatingImage,
  ImageWrapper,
} from './style';

const images = [
  '/images/acRepair.png.png',
  '/images/Painter.png',
  '/images/Photographer.png',
  '/images/Electrician.png',
  '/images/Beautician.png',
  '/images/Plumber.png',
  '/images/Barber.png',
  '/images/Sweeper.png',
  '/images/PestControl.png',
];

const HeroImageSliderComponent = ({ activeIndex }: { activeIndex: number }) => {
  const currentImage = activeIndex % images.length;

  return (
    // <HeroImageWrapper>
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
    // </HeroImageWrapper>
  );
};

HeroImageSliderComponent.displayName = 'HeroImageSlider';

export const HeroImageSlider = React.memo(HeroImageSliderComponent);
