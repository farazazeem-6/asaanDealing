import { Flex } from '@/components/elements';
import { styled } from '@/theme';

export const NavList = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$rem$1_25',

  '@lg_max': {
    display: 'none',
  },
});

export const Actions = styled(Flex, {
  alignItems: 'center',
  gap: '$rem$0_87',

  '@lg_max': {
    display: 'none',
  },
});

export const MobileNav = styled(Flex, {
  display: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$rem$0_62',

  '@lg_max': {
    display: 'flex',
  },
});

export const MenuButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0',

  '@lg_max': {
    display: 'flex',
  },
});
