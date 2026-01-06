import { styled } from '@/theme';
import { Box } from './Box';

export const Flex = styled(Box, {
  display: 'flex',
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      1: {
        gap: '$rem$0_06',
      },
      2: {
        gap: '$rem$0_12',
      },
      3: {
        gap: '$rem$0_18',
      },
      4: {
        gap: '$rem$0_25',
      },
      5: {
        gap: '$rem$0_31',
      },
      6: {
        gap: '$rem$0_37',
      },
      7: {
        gap: '$rem$0_43',
      },
      8: {
        gap: '$rem$0_5',
      },
      9: {
        gap: '$rem$0_56',
      },
      10: {
        gap: '$rem$0_62',
      },
      12: {
        gap: '$rem$0_75',
      },
      13: {
        gap: '$rem$0_81',
      },
      14: {
        gap: '$rem$0_87',
      },
      15: {
        gap: '$rem$0_93',
      },
      16: {
        gap: '$rem$1',
      },
      17: {
        gap: '$rem$1_06',
      },
      18: {
        gap: '$rem$1_12',
      },
      19: {
        gap: '$rem$1_18',
      },
      20: {
        gap: '$rem$1_25',
      },
    },
    gapX: {
      1: {
        columnGap: '$rem$0_06',
      },
      2: {
        columnGap: '$rem$0_12',
      },
      3: {
        columnGap: '$rem$0_18',
      },
    },
    gapY: {
      1: {
        rowGap: '$rem$0_06',
      },
      2: {
        rowGap: '$rem$0_12',
      },
      3: {
        rowGap: '$rem$0_18',
      },
    },
    flex: {
      1: {
        flex: 1,
      },
      2: {
        flex: 2,
      },
      3: {
        flex: 3,
      },
      4: {
        flex: 4,
      },
      5: {
        flex: 5,
      },
      6: {
        flex: 6,
      },
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});
