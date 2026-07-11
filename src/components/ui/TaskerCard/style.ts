import { Box, Button, Flex, NextImage, Text } from '@/components/elements';
import { styled } from '@/theme';

export const CardWrapper = styled(Flex, {
  border: '$px$1 solid $lightGrayLine',
  borderRadius: '$px$20',
  padding: '$px$1 $px$10 $px$10 $px$10',
  backgroundColor: '$white',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  flexDirection: 'column !important',
  gap: '$px$6',
  boxShadow: '0 $px$8 $px$8 rgba(0, 0, 0, 0.08)',
  cursor: 'pointer',
  margin: '$px$4',
  background: '$categoryCardBg',

  '&:hover': {
    boxShadow: '0 $px$4 $px$12 rgba(0,0,0,0.08)',
    borderColor: '$green',
  },

  '@md_max': {
    padding: '$px$1 $px$6 $px$6 $px$6',
    borderRadius: '$px$16',
  },
});

export const HeaderRow = styled(Flex, {
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  borderBottom: '$px$1 solid $lightGrayLine',
  padding: '$px$6 0',
});

export const UserInfoWrapper = styled(Flex, {
  flexDirection: 'column !important',
  gap: '$px$10',

  '@sm_max': {
    gap: '$px$5',
  },
});
export const TaskerName = styled(Text, {
  fontWeight: '$fontWeight$bold',
  fontSize: '$px$14',
  color: '$primaryHeading',
  textOverflow: 'ellipsis',

  '@sm_max': {
    fontSize: '$px$14',
  },
  '@xs_max': {
    fontSize: '$px$12',
  },
});

export const TaskerExpStatus = styled(Text, {
  fontSize: '$px$10',
  color: '$secondryHeading !important',
  fontWeight: '$fontWeight$thin',
});
export const ServiceTitle = styled(Text, {
  fontWeight: '$fontWeight$medium',
  fontSize: '$px$16',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  '@sm_max': {
    fontSize: '$px$11',
    fontWeight: '$fontWeight$semibold',
  },
});

export const TaskerPrice = styled(Text, {
  fontWeight: '$fontWeight$semibold',
  fontSize: '$px$12',
  '@sm_max': {
    fontSize: '$px$10',
  },
});
export const AvatarImg = styled(NextImage, {
  width: '$px$55',
  height: '$px$55',
  borderRadius: '$percent$50',
  objectFit: 'cover',
  border: '$px$1 solid $primary',
  '@lg_max': {
    width: '$px$45',
    height: '$px$45',
  },
  '@sm_max': {
    width: '$px$35',
    height: '$px$35',
  },
});

export const ImageWrapper = styled(Box, {
  position: 'relative',
  width: '$percent$100',
  borderRadius: '$px$10',
  overflow: 'hidden',
  aspectRatio: '16 / 10',
  border: '$px$1 solid $lightGrayLine',
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

export const UserLocation = styled(Text, {
  fontSize: '$px$12',
  color: '$secondryHeading',
  fontWeight: '$fontWeight$normal',
  width: '$px$120',
  '@sm_max': {
    fontSize: '$px$10',
  },
  '@xs_max': {
    width: '$px$60',
  },
});

export const FooterAction = styled(Flex, {
  justifyContent: 'center !important',
  alignItems: 'center !important',
  gap: '$px$10',
  color: '$secondryHeading',
  fontSize: '$px$12',
  cursor: 'pointer',
  marginTop: 'auto',
  padding: '0 $px$10',
  '@lg_max': {
    justifyContent: 'center !important',
    gap: '$px$5',
  },
  '@sm_max': {
    gap: '$px$2',
  },
});

export const ButtonWrapper = styled(Flex, {
  alignItems: 'center !important',
  gap: '$px$3',
  '@sm_max': { width: '$percent$100', justifyContent: 'center !important' },
  '@xs_max': { width: '$percent$100', justifyContent: 'center !important' },
});

export const FooterButton = styled(Button, {
  gap: '$px$3',
  height: '$px$30',
  '@lg_max': {
    height: '$px$20',
    padding: '0',
  },
});
export const ButtonLabel = styled(Text, {
  color: '$secondryHeading !important',
});

export const ImgFallBackDiv = styled(Flex, {
  justifyContent: 'center !important',
  alignItems: 'center !important',
  width: '$percent$100',
  height: '$percent$100',
  backgroundColor: '$lightGray',
  color: '$secondryHeading',
  fontSize: '$px$14',
});
