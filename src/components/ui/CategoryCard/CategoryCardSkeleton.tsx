'use client';
import React from 'react';
import { styled, CategoryCardShimmer } from '@/theme';
import { Flex, Box } from '@/components/elements';

const SkeletonWrapper = styled(Flex, {
  flexDirection: 'column !important',
  alignItems: 'center !important',
  justifyContent: 'center !important',
  border: '$px$1 solid $lightGrayLine',
  borderRadius: '$px$16',
  padding: '$px$14',
  height: '$px$170',
  position: 'relative',
  overflow: 'hidden',
  background: '$categoryCardBg',
  boxShadow: '$shadows$categoryCard',
  '@md_max': {
    height: '$px$140',
  },
  '@sm_max': {
    padding: '$px$10',
  },
  '@xs_max': {
    padding: '$px$6',
  },
});

const SkeletonContent = styled(Flex, {
  flexDirection: 'column !important',
  alignItems: 'center',
  gap: '$rem$1',
  zIndex: '$ul$1',
  position: 'relative',
  width: '$percent$100',
});

const SkeletonCircle = styled(Box, {
  width: '$px$70',
  height: '$px$70',
  borderRadius: '$percent$50',
  backgroundColor: '$veryLightGray',
  flexShrink: '0',
  backgroundImage:
    'linear-gradient(90deg, $veryLightGray 0px, $backgroundDisabledSlot $px$40, $veryLightGray $px$80)',
  backgroundSize: '$px$468',
  animation: `${CategoryCardShimmer} 3s ease-in-out infinite`,
  '@sm_max': {
    height: '$px$50',
    width: '$px$50',
  },
});

const SkeletonTitle = styled(Box, {
  height: '$px$12',
  width: '$px$100',
  borderRadius: '$px$4',
  backgroundColor: '$veryLightGray',
  backgroundImage:
    'linear-gradient(90deg, $veryLightGray 0px, $backgroundDisabledSlot $px$40, $veryLightGray $px$80)',
  backgroundSize: '$px$468',
  animation: `${CategoryCardShimmer} 3s ease-in-out infinite`,
  '@md_max': {
    height: '$px$10',
    width: '$px$80',
  },
  '@sm_max': {
    height: '$px$9',
    width: '$px$70',
  },
});

export const CategoryCardSkeleton: React.FC = () => {
  return (
    <SkeletonWrapper>
      <SkeletonContent>
        <SkeletonCircle />
        <SkeletonTitle />
      </SkeletonContent>
    </SkeletonWrapper>
  );
};
