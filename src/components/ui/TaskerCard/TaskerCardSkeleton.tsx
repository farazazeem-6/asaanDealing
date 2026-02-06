import { Box, Flex } from '@/components/elements';
import { CardWrapper, HeaderRow, FooterAction } from './style';
import { CardsShimmer, styled } from '@/theme';

const SkeletonBase = styled(Box, {
  backgroundColor: '$lightGray',
  backgroundImage: '$skeletonGradient',
  backgroundSize: '$px$600 $percent$100',
  animation: `${CardsShimmer} 1.5s infinite ease-in-out`,
  borderRadius: '$px$6',
});

const SkeletonAvatar = styled(SkeletonBase, {
  width: '$px$55',
  height: '$px$55',
  borderRadius: '$percent$50',
  flexShrink: 0,
  '@lg_max': {
    width: '$px$45',
    height: '$px$45',
  },
  '@sm_max': {
    width: '$px$35',
    height: '$px$35',
  },
});

const SkeletonText = styled(SkeletonBase, {
  height: '$px$14',
  variants: {
    width: {
      full: { width: '$percent$100' },
      half: { width: '$percent$50' },
      third: { width: '$percent$33' },
      quarter: { width: '$percent$25' },
    },
  },
  defaultVariants: {
    width: 'full',
  },
});

const SkeletonBadge = styled(SkeletonBase, {
  height: '$px$20',
  width: '$px$60',
  borderRadius: '$px$12',
});

const SkeletonImage = styled(SkeletonBase, {
  position: 'relative',
  width: '$percent$100',
  borderRadius: '$px$10',
  aspectRatio: '16 / 10',
  '@lg_max': {
    aspectRatio: '5 / 2',
  },
  '@md_max': {
    aspectRatio: '3 / 2',
  },
  '@sm_max': {
    aspectRatio: '7 / 4',
  },
  '@xs_max': {
    aspectRatio: '4 / 3',
  },
});

const SkeletonButton = styled(SkeletonBase, {
  height: '$px$30',
  width: '$px$70',
  borderRadius: '$px$6',
  '@lg_max': {
    height: '$px$20',
  },
});

export const TaskerCardSkeleton = () => {
  return (
    <CardWrapper>
      <HeaderRow>
        <Flex align={'center'} gap={'10'}>
          <SkeletonAvatar />
          <Flex
            direction={'column'}
            gap={'10'}
            css={{ width: '$percent$100', '@sm_max': { gap: '$px$5' } }}
          >
            <SkeletonText
              width="half"
              css={{ height: '$px$14', '@sm_max': { height: '$px$12' } }}
            />
            <SkeletonText width="third" css={{ height: '$px$10' }} />
          </Flex>
        </Flex>
        <SkeletonBadge css={{ height: '$px$22', width: '$px$50' }} />
      </HeaderRow>

      <SkeletonText
        width="full"
        css={{ height: '$px$16', '@sm_max': { height: '$px$11' } }}
      />

      <Flex align="center" gap={'4'}>
        <SkeletonBadge
          css={{ width: '$px$100', '@sm_max': { width: '$px$80' } }}
        />
        <SkeletonBadge css={{ width: '$px$60' }} />
      </Flex>

      <SkeletonImage />

      <HeaderRow css={{ alignItems: 'center' }}>
        <Flex align="center" gap="4" css={{ width: '$percent$100' }}>
          <Box
            css={{
              width: '$px$15',
              height: '$px$15',
              '@sm_max': {
                width: '$px$12',
                height: '$px$12',
              },
            }}
          >
            <SkeletonBase
              css={{
                width: '$percent$100',
                height: '$percent$100',
                borderRadius: '$px$3',
              }}
            />
          </Box>
          <SkeletonText
            width="half"
            css={{ height: '$px$12', '@sm_max': { height: '$px$10' } }}
          />
        </Flex>
        <SkeletonText
          width="quarter"
          css={{ height: '$px$12', '@sm_max': { height: '$px$10' } }}
        />
      </HeaderRow>

      <FooterAction>
        <SkeletonButton />
        <SkeletonButton />
        <SkeletonButton />
      </FooterAction>
    </CardWrapper>
  );
};
