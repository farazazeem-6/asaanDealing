import * as React from 'react';
import { styled } from '@/theme';
import { Flex } from './Flex';
import { TComponentSize } from '@/utils/types';

type TInputFieldProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'size'
> & {
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
  inputSize?: TComponentSize;
};

const InputGroup = styled(Flex, {
  position: 'relative',
  width: '$percent$100',
});

const StyledInput = styled('input', {
  color: '$foreground',
  borderRadius: '$px$8',
  backgroundColor: '$background',
  width: '$percent$100',
  border: '$px$1 solid $border',
  outline: '$px$1  solid $border',

  variants: {
    inputSize: {
      sm: { padding: '$rem$0_37 $rem$0_75', fontSize: '$rem$0_75' },
      md: { padding: '$rem$1 $rem$1', fontSize: '$rem$0_87' },
      lg: { padding: '$rem$1_25 $rem$1', fontSize: '$rem$1_06' },
    },
  },
  defaultVariants: { inputSize: 'md' },

  '&.has-left': { paddingLeft: '$px$40' },
  '&.has-right': { paddingRight: '$px$90' },
});

const InputSlot = styled(Flex, {
  position: 'absolute',
  top: '$percent$50',
  transform: 'translateY(-50%)',
  zIndex: '$ul$2',
  variants: {
    side: {
      left: { left: '$px$5' },
      right: { right: '$px$5' },
    },
  },
});

export const Input = React.forwardRef<HTMLInputElement, TInputFieldProps>(
  ({ contentLeft, contentRight, inputSize, ...props }, ref) => {
    const className = [contentLeft && 'has-left', contentRight && 'has-right']
      .filter(Boolean)
      .join(' ');

    return (
      <InputGroup align={'center'}>
        {contentLeft && (
          <InputSlot align={'center'} side="left">
            {contentLeft}
          </InputSlot>
        )}

        <StyledInput
          ref={ref}
          className={className}
          inputSize={inputSize}
          {...props}
        />

        {contentRight && (
          <InputSlot align={'center'} side="right">
            {contentRight}
          </InputSlot>
        )}
      </InputGroup>
    );
  },
);

Input.displayName = 'Input';
