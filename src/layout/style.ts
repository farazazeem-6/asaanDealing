import { Flex } from '@/components/elements';
import { styled } from '@/theme';

export const Logo = styled(Flex, {
  alignItems: 'center !important',
  fontWeight: '$fontWeight$bold',
  fontSize: '$rem$1_25',
  cursor: 'pointer',
  zIndex: 1,
});

export const HeaderContainer = styled(Flex, {
  position: 'sticky',
  top: 0,
  height: '$px$60',
  backgroundColor: '$white',
  borderBottom: '$px$1 solid $lightGrayLine',
  width: '$percent$100',
  justifyContent: 'space-between !important',
  alignItems: 'center !important',
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',
  padding: '$rem$0_62 0',
  zIndex: 2,
});

export const NavItem = styled('a', {
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
    bottom: -2,
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
