import { SkeletonBase } from './style';

export const ServiceImageSkeleton = () => (
  <SkeletonBase
    css={{
      position: 'absolute',
      inset: 0,
      width: '$percent$100',
      height: '$percent$100',
      borderRadius: '$px$12',
      zIndex: 2,
    }}
  />
);
