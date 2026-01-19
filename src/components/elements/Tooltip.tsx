import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
  styled,
} from '@/theme';
import { Box } from './Box';

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipContentProps = React.ComponentProps<
  typeof TooltipPrimitive.Content
>;

type TooltipProps = TooltipPrimitiveProps &
  Omit<TooltipContentProps, 'content'> & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
    pooling?: boolean;
    fullWidth?: boolean;
    showBackgroundColor?: boolean;
    triggerClassName?: string;
  };

const TooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: '$cardBgColor',
  boxShadow: '0 $px$4 $px$10 rgba(0, 0, 0, 0.2)',
  filter: ' drop-shadow(rgba(0, 0, 0, 0.3) 0 $px$2 $px$10)',
  borderRadius: '$px$4',
  padding: '$px$4 $px$8',
  wordBreak: 'break-word',
  zIndex: '$ul$11',
  fontSize: '$px$10',
  lineHeight: 'normal',
  color: '$primaryHeading',
  userSelect: 'none',
  maxWidth: '$px$300',
  textAlign: 'start',
  letterSpacing: '$ul$0.5',
  transition: 'opacity 0.3s ease-in-out, transform 0.2s ease-in-out',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  variants: {
    showBackgroundColor: {
      false: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
  },
});

const IconButton = styled(Box, {
  padding: '0 !important',
  backgroundColor: 'unset',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  maxWidth: 'max-content',
  variants: {
    fullWidth: {
      true: {
        width: '$percent$100',
        maxWidth: '$percent$100',
      },
    },
  },
});

export const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  disableHoverableContent,
  fullWidth = false,
  showBackgroundColor = true,
  triggerClassName,
  ...props
}: TooltipProps) => {
  const rootProps = {
    open,
    defaultOpen,
    onOpenChange,
    delayDuration,
    disableHoverableContent,
  };
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...rootProps}>
        <TooltipPrimitive.Trigger asChild>
          <IconButton fullWidth={fullWidth} className={triggerClassName}>
            {children}
          </IconButton>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent
            showBackgroundColor={showBackgroundColor}
            sideOffset={5}
            {...props}
          >
            {content}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
