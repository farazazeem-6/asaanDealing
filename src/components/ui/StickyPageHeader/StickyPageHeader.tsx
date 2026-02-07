import { Box, Container, Flex } from '@/components/elements';
import { styled } from '@/theme';
import { TStickyPageHeaderProps } from '../types';

const StickyWrapper = styled(Box, {
  backgroundColor: '$white',
  transition: 'all 0.2s ease-in-out',
  width: '$percent$100',
});

export const StickyPageHeader = ({
  heading,
  children,
  zIndex = 5,
  topOffset = '0px',
  isSticky = true,
  border = true,
}: TStickyPageHeaderProps) => {
  return (
    <StickyWrapper
      css={{
        ...(isSticky && {
          position: 'sticky',
          top: topOffset,
          zIndex,
          borderBottom: border ? '$px$1 solid $lightGrayLine' : 'none',
        }),
        paddingBottom: '$px$16',
        paddingTop: '$px$10',
      }}
    >
      {/* Heading Section (Full Width) */}
      {heading && (
        <Flex
          justify={'center'}
          css={{ marginBottom: children ? '$px$20' : '0' }}
        >
          {heading}
        </Flex>
      )}

      {/* Controls Section (Inside Container for Alignment) */}
      {children && (
        <Container
          size="fluid"
          css={{
            maxWidth: '$breakpoints$xxxl',
            '@lg_max': { padding: '0px $px$10' },
          }}
        >
          {children}
        </Container>
      )}
    </StickyWrapper>
  );
};
