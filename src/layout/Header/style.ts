import { Flex } from '@/components/elements';
import { MenuIcon } from '@/components/svgs';
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

export const MenuIconButton = styled(MenuIcon, {
  cursor: 'pointer',
  color:'$primary',

  '@lg_max': {
    display: 'flex',
  },
});
