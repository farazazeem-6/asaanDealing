import { styled } from '@/theme';
import { Flex } from './Flex';
import { CSS } from '@/theme';

type TDividerProps = {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  css?: CSS;
};

export function Divider({
  orientation = 'horizontal',
  label,
  css,
}: TDividerProps) {
  return (
    <StyledDivider orientation={orientation} css={css}>
      {label && <span>{label}</span>}
    </StyledDivider>
  );
}

const StyledDivider = styled(Flex, {
  textAlign: 'center',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',

  '& span': {
    backgroundColor: '$white',
    padding: '0 $px$10',
    position: 'relative',
    zIndex: '$ul$1',
    color: '$disabledSlotColor',
    fontSize: '$rem$0_5',
  },

  '&::before': {
    content: '""',
    backgroundColor: '$veryLightGray',
    position: 'absolute',
    zIndex: '$ul$0',
  },

  variants: {
    orientation: {
      horizontal: {
        width: '$percent$100',
        height: '$px$20',
        '@sm_max': { height: '$px$2' },
        '&::before': {
          height: '$px$1',
          width: '$percent$100',
          top: '$percent$50',
          left: 0,
        },
      },
      vertical: {
        height: '$percent$100',
        width: '$px$20',
        flexDirection: 'column',
        '&::before': {
          width: '$px$1',
          height: '$percent$100',
          left: '$percent$50',
          top: 0,
        },
        '& span': {
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          padding: '$px$10 0',
        },
      },
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
  },
});
