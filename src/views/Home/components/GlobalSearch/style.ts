import { Box, Flex } from '@/components/elements';
import { styled } from '@/theme';

export const SearchWrapper = styled(Flex, {
  border: '$px$1 solid $lightGrayLine',
  borderRadius: '$px$15',
  maxWidth: '$px$800',
  position: 'relative',
  color: '$secondryHeading',
  boxSizing: 'border-box',
  alignItems: 'center',

  '@md_max': {
    border: 'none',
    flexWrap: 'wrap',
    gap: '$px$10',
  },
});

export const ServiceInputGroup = styled(Flex, {
  flex: 1,
  paddingLeft: '$px$10',
  alignItems:'center',

  '@md_max': {
    border: '$px$1 solid $lightGrayLine',
    borderRight: 'none',
    borderRadius: '$px$15 0 0 $px$15',
    height: '$px$50',
    alignItems: 'center',
  },
});

export const Input = styled('input', {
  border: 'none',
  outline: 'none',
  width: '$percent$100',
  padding: '$rem$0_62',
  fontSize: '$rem$1',
  color: '$foreground',
  '&::placeholder': { color: '$secondryHeading', fontSize: '$rem$1' },
});

export const LocationTrigger = styled(Flex, {
  flex: 0.6,
  padding: '0 $px$12',
  cursor: 'pointer',
  userSelect: 'none',
  minWidth: '$px$190',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@md_max': {
    order: '$ul$1',
    flexBasis: '$percent$100',
    border: '$px$1 solid $lightGrayLine',
    borderRadius: '$px$15',
    height: '$px$50',
  },
});

export const SearchBtn = styled('button', {
  border: 'none',
  outline: 'none',
  padding: '$px$18 $px$15',
  fontSize: '$px$12',
  cursor: 'pointer',
  transition: 'background 0.2s',
  borderTopRightRadius: '$px$14',
  borderBottomRightRadius: '$px$14',
  flexShrink: 0,
  background: '$gradients$primaryButton',
  color: '$white',
  fontWeight: '$fontWeight$semibold',
  '&:hover': {
    opacity: '$ul$0.9',
    background: '$gradients$primaryHover',
  },

  '@md_max': {
    borderTopRightRadius: '$px$15',
    borderBottomRightRadius: '$px$15',
    height: 'auto',
  },
});

export const DropdownMenu = styled(Flex, {
  position: 'absolute',
  backgroundColor: '$white',
  top: '$percent$110',
  width: '$px$200',
  border: '1px solid $lightGrayLine',
  borderRadius: '$px$12',
  boxShadow: '$shadows$dropDown',
  zIndex: '$ul$10',
  flexDirection: 'column !important',
  '@md_max': {
    width: '$percent$90',
  },
});

export const DropdownHeader = styled(Box, {
  padding: '$px$6',
  borderBottom: '$px$1 solid $lightGrayLine',
  overflow: 'hidden',
});

export const DropdownSearch = styled('input', {
  boxSizing: 'border-box',
  width: '$percent$100',
  padding: '$px$8 $px$6',
  borderRadius: '$px$6',
  border: '$px$1 solid $dGreen',
  outline: 'none',
  fontSize: '$px$12',
});

export const ListContainer = styled(Box, {
  maxHeight: '$px$200',
  overflowY: 'auto',
});

export const ListItem = styled(Box, {
  padding: '$px$4 $px$16',
  fontSize: '$px$12',
  color: '$secondryHeading',
  cursor: 'pointer',
  borderBottom: '$px$1 solid $veryLightGray',
  '&:hover': {
    backgroundColor: '$colorGray',
    color: '$dGreen',
  },
  variants: {
    isBack: {
      true: {
        color: '$secondryHeading',
        fontSize: '$px$11',
        letterSpacing: '$px$0.5',
      },
    },
  },
});
