'use client';
import { Badge, NextImage } from '@/components/elements';
import {
  ServiceCardTitle,
  ServiceCardImage,
  ServiceCardWrapper,
  ServiceCardDesc,
  ServiceCardHeader,
  ImgFallBackDiv,
} from './style';
import { TServiceData } from '../types';
import { useMemo, useState } from 'react';
import { ServiceImageSkeleton } from './ServiceImageSkeleton';

// IMAGE EXTRACTION HELPER
const getServiceImage = (service: TServiceData): string => {
  // 1. Try media.images first (best quality)
  if (service.media?.images && typeof service.media.images === 'object') {
    const mediaImages = Object.values(service.media.images).filter(
      (img): img is string => typeof img === 'string' && img.trim().length > 0,
    );
    if (mediaImages.length > 0) return mediaImages[0];
  }

  // 2. Fallback to metadata.image
  if (service.metadata?.image && typeof service.metadata.image === 'object') {
    const metadataImages = Object.values(service.metadata.image).filter(
      (img): img is string => typeof img === 'string' && img.trim().length > 0,
    );
    if (metadataImages.length > 0) return metadataImages[0];
  }

  // 3. No image found
  return '';
};

// SERVICE CARD COMPONENT
export const ServiceCard = ({ Service }: { Service: TServiceData }) => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const coverImage = useMemo(() => getServiceImage(Service), [Service]);
  return (
    <ServiceCardWrapper>
      <ServiceCardImage>
        {/* Image loading skeleton */}
        {coverImage && isImageLoading && !imageError && (
          <ServiceImageSkeleton />
        )}

        {coverImage && !imageError ? (
          <NextImage
            sizes="(max-width: 768px) 100vw, 25vw"
            src={coverImage}
            alt={Service.name}
            fill
            loading="eager"
            onLoad={() => setIsImageLoading(false)}
            onError={() => {
              setImageError(true);
              setIsImageLoading(false);
            }}
            style={{
              opacity: isImageLoading ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          />
        ) : (
          <ImgFallBackDiv>No Service Image</ImgFallBackDiv>
        )}
      </ServiceCardImage>

      <ServiceCardHeader>
        <ServiceCardTitle title={Service.name} textEllipsis={'1'}>
          {Service.name}
        </ServiceCardTitle>
        <Badge color={'darkGreen'} size={'small'}>
          {Service.metadata?.workMode}
        </Badge>
      </ServiceCardHeader>

      <ServiceCardDesc>{Service.metadata?.default_description}</ServiceCardDesc>
    </ServiceCardWrapper>
  );
};
