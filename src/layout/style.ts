import { Box, Flex, Text } from '@/components/elements';
import { styled } from '@/theme';
import Link from 'next/link';

export const StickyHeader = styled(Box, {
  position: 'sticky',
  top: 0,
  zIndex: '$ul$10',
  backgroundColor: '$white',
  width: '$percent$100',
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',
});
export const Logo = styled(Flex, {
  alignItems: 'center !important',
  fontWeight: '$fontWeight$bold',
  fontSize: '$rem$1_25',
  cursor: 'pointer',
  zIndex: '$ul$1',
  gap: '$px$5',
});

export const HeaderContainer = styled(Flex, {
  height: '$px$60',
  width: '$percent$100',
  justifyContent: 'space-between !important',
  alignItems: 'center !important',
  padding: '$rem$0_62 0',
  borderBottom: '$px$1 solid $lightGrayLine',
});

export const NavItem = styled(Link, {
  position: 'relative',
  display: 'block',
  fontSize: '$rem$1',
  fontWeight: '$fontWeight$medium',
  cursor: 'pointer',
  padding: '$rem$0_37 0',
  color: '$slate12',
  textDecoration: 'none',
  transition: 'color 0.3s ease, transform 0.2s ease',

  '&:hover': { color: '$dark' },

  '&::after': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: '-$px$2',
    height: '$px$2',
    width: '0%',
    backgroundColor: '$dark',
    transition: 'width 0.3s ease',
  },

  variants: {
    location: {
      header: {
        '&:hover': { transform: 'translateY(-$px$2)' },
      },
      sidebar: {
        borderBottom: '$px$1 solid $lightGrayLine',
        '&:hover': { transform: 'translateX($px$2)' },
        '&:last-child': { borderBottom: 'none' },
      },
    },

    active: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      location: 'header',
      active: 'true',
      css: {
        color: '$textOnHover',
        fontWeight: '$fontWeight$semibold',
        transform: 'translateY(-$px$2)',
        '&::after': { width: '$percent$100' },
      },
    },
    {
      location: 'sidebar',
      active: 'true',
      css: {
        color: '$textOnHover',
        fontWeight: '$fontWeight$semibold',
        '&::after': { width: '0%' },
      },
    },
  ],
});

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
