import { Box, Flex, Text } from '@/components/elements';
import { styled } from '@/theme';

export const LogoTitle = styled(Text, {
  '&::before': {
    content: '"Asaan "',
    background: '$gradients$greenGradient1',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '$fontWeight$semibold',
  },
});
export const SideBarContent = styled(Flex, {
  flexDirection: 'column !important',
  gap: '$rem$1_25',
  justifyContent: 'flex-start !important',
  alignItems: 'flex-start !important',
  padding: '0 $rem$0_87',
  overflowY: 'auto',
  overscrollBehavior: 'contain',
  flex: 1,
  background: '$sideBarContentBg',
});
export const SideBarNav = styled(Flex, {
  flexDirection: 'column !important',
  marginTop: '$px$30',
  gap: '$rem$1_56',
  width: '$percent$100',
});

export const SidebarOverlay = styled(Box, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$shadows$sideBarOverlay',
  zIndex: 5,
  opacity: 1,
  visibility: 'visible',
  transition: 'opacity 0.3s ease, visibility 0.3s ease',

  '&.open': {
    opacity: 1,
    visibility: 'visible',
  },

  '@md': {
    display: 'none',
  },
});

export const SidebarWrapper = styled(Box, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '$percent$100',
  height: '$dvh$100',
  display: 'flex',
  flexDirection: 'column',
  background: '$sideBarBgGradient',
  backdropFilter: 'saturate(180%) blur(8px)',
  WebkitBackdropFilter: 'saturate(180%) blur(8px)',
  boxShadow: '$shadows$sideBarWrapper',
  borderLeft: '$px$1 solid $lightGrayLine',
  zIndex: 6,
  transform: 'translateX(100%)',
  transition: 'transform 0.3s ease',

  '&.open': {
    transform: 'translateX(0)',
  },

  '@sm_max': {
    width: '280px',
  },

  '@xs_max': {
    width: '$vw$100',
  },

  '@md': {
    display: 'none',
  },
});
