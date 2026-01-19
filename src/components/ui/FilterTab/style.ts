import { Flex } from '@/components/elements';
import { styled } from '@/theme';

export const TabsContainer = styled(Flex, {
  alignItems: 'center',
  gap: '$px$10',
  overflowX: 'auto',
  scrollbarWidth: 'none', // Hide scrollbar Firefox
  '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar Chrome
  '@md_max': {
    padding: '$px$6',
    borderRadius: '$px$10',
    borderBottom: '$px$2 solid $whisperGray',
    boxShadow:
      'inset $px$4 $px$4 $px$8 rgba(0, 0, 0, 0.1), 0 0 $px$12 rgba(255, 255, 255, 0.08)',
    gap: '$px$8',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '$percent$100',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
  },
  '@sm_max': {
    gap: '$px$4',
    padding: '$px$4',
  },
});

export const TabButton = styled('button', {
  all: 'unset',
  padding: '$px$6 $px$10',
  borderRadius: '$px$8',
  fontSize: '$px$11',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s',
  border: '$px$1 solid transparent',

  variants: {
    isActive: {
      true: {
        background: '$gradients$primaryButton',
        border: ' $px$1 solid $primary',
        color: '$white',
      },
      false: {
        backgroundColor: 'transparent',
        color: '$primaryHeading',
        '&:hover': {
          background: '$navBtnHover',
        },
      },
    },
  },
  '@sm_max': {
    fontSize: '$px$10',
    padding: '$px$5 $px$10',
    borderRadius: '$px$6',
  },
});
