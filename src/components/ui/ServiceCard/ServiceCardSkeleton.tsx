import { Flex } from '@/components/elements';
import {
  ServiceCardHeader,
  ServiceCardImage,
  ServiceCardWrapper,
  SkeletonBase,
} from './style';

export const ServiceCardSkeleton = () => {
  return (
    <ServiceCardWrapper>
      {/* Image Skeleton Area */}
      <ServiceCardImage>
        <SkeletonBase css={{ width: '$percent$100', height: '$percent$100' }} />
      </ServiceCardImage>

      {/* Header Skeleton (Title + Badge) */}
      <ServiceCardHeader>
        <SkeletonBase
          css={{
            width: '$percent$60',
            height: '$px$18',
            borderRadius: '$px$4',
          }}
        />
        <SkeletonBase
          css={{ width: '$px$40', height: '$px$20', borderRadius: '$px$12' }}
        />
      </ServiceCardHeader>

      {/* Description Skeleton */}
      <Flex direction="column" gap="4">
        <SkeletonBase
          css={{
            width: '$percent$100',
            height: '$px$12',
            borderRadius: '$px$2',
          }}
        />
        <SkeletonBase
          css={{
            width: '$percent$80',
            height: '$px$12',
            borderRadius: '$px$2',
          }}
        />
      </Flex>
    </ServiceCardWrapper>
  );
};
