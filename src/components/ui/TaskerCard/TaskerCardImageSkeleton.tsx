import { Box } from '@/components/elements';
import { CategoryCardShimmer, styled } from '@/theme';

const SkeletonBase = styled(Box, {
  backgroundColor: '$lightGray',
  backgroundImage:
    'linear-gradient(90deg, $lightGray 0px, $white 40px, $lightGray 80px)',
  backgroundSize: '$px$600 $percent$100',
  animation: `${CategoryCardShimmer} 1.5s infinite ease-in-out`,
  borderRadius: '$px$10',
});

export const TaskerCardImageSkeleton = () => {
  return (
    <SkeletonBase
      css={{
        width: '$percent$100',
        height: '$percent$100',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
};
