import React from 'react';
import { styled } from '@/theme';
import { Box } from './Box';

export const BadgeText = styled('span', {
  fontWeight: '$fontWeight$normal',
  whiteSpace: 'nowrap',

  variants: {
    textEllipsis: {
      '1': {
        whiteSpace: 'normal',
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': '1',
        lineClamp: '1',
        '-webkit-box-orient': 'vertical',
        textOverflow: 'ellipsis',
        wordBreak: 'break-all',
      },
      '2': {
        whiteSpace: 'normal',
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': '2',
        lineClamp: '2',
        '-webkit-box-orient': 'vertical',
        textOverflow: 'ellipsis',
        wordBreak: 'break-word',
      },
    },
  },
});

export const BadgeWrapper = styled(Box, {
  borderRadius: '$px$5',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease',
  verticalAlign: 'middle',
  maxWidth: '$percent$100',

  variants: {
    color: {
      red: { backgroundColor: '#FFEAEA', color: '#D32F2F' },
      green: { backgroundColor: '#E8F5E9', color: '#2E7D32' },
      darkGreen: { backgroundColor: '#265855', color: '$white' },
      purple: { backgroundColor: '#F3E5F5', color: '#7B1FA2' },
      blue: { backgroundColor: '#E3F2FD', color: '#1565C0' },
      orange: { backgroundColor: '#FFF3E0', color: '#EF6C00' },
      teal: { backgroundColor: '#E0F2F1', color: '#00796B' },
      gray: { backgroundColor: '#F5F5F5', color: '#616161' },
      pink: { backgroundColor: '#FCE4EC', color: '#C2185B' },
    },
    size: {
      small: {
        padding: '$px$3 $px$6',
        borderRadius: '$px$4',
        [`& ${BadgeText}`]: { fontSize: '$px$10' },
        '@sm_max': {
          [`& ${BadgeText}`]: { fontSize: '$px$8',padding: '$px$1 $px$3', },
        },
      },
      medium: {
        padding: '$px$8 $px$6',
        borderRadius: '$px$8',
        [`& ${BadgeText}`]: { fontSize: '$px$12' },
      },
      large: {
        padding: '$px$12 $px$6',
        borderRadius: '$px$12',
        [`& ${BadgeText}`]: { fontSize: '$px$14' },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
    size: 'medium',
  },
});

type BadgeProps = React.ComponentProps<typeof BadgeWrapper> & {
  children: React.ReactNode;
  textEllipsis?: React.ComponentProps<typeof BadgeText>['textEllipsis'];
};

export const Badge = ({ children, textEllipsis, ...props }: BadgeProps) => {
  return (
    <BadgeWrapper {...props}>
      <BadgeText textEllipsis={textEllipsis}>{children}</BadgeText>
    </BadgeWrapper>
  );
};
