'use client';

import { useState, useRef, useEffect } from 'react';
import { styled } from '@/theme';
import { CheckIcon, ChevronDown, GlobeIcon } from '@/components/svgs';
import { Box } from './Box';
import { Text } from './Text';

type TSelectComponentProps<T> = {
  options: T[];
  selected: T | null;
  getLabel: (item: T) => string;
  getKey: (item: T) => string | number;
  onChange: (item: T) => void;
  showIcon?: boolean; // optional globe icon
};

const SelectWrapper = styled(Box, {
  position: 'relative',
  display: 'inline-block',
});

const SelectButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$rem$0_5',
  padding: '$rem$0_5 $rem$0_75',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$px$8',
  cursor: 'pointer',
  fontSize: '$rem$0_87',
  fontWeight: '$fontWeight$medium',
  color: '$primaryHeading',
  transition: 'all 0.2s ease',
  outline: 'none',

  '&:hover': {
    backgroundColor: '$selectorHover',
  },

  '&:active': {
    transform: 'scale(0.98)',
  },
});

const SelectText = styled(Text, {
  fontSize: '$rem$0.87',
  fontWeight: '$fontWeight$semibold',
  color: '$primaryHeading',
  userSelect: 'none',
});

const DropdownContainer = styled(Box, {
  position: 'absolute',
  top: 'calc(100% + $px$8)',
  right: 0,
  minWidth: '$px$180',
  backgroundColor: '$white',
  border: '$px$1 solid $lightGrayLine',
  borderRadius: '$px$6',
  boxShadow: '0 $px$4 $px$16 rgba(0, 0, 0, 0.12)',
  padding: '$rem$0_5',
  zIndex: '$ul$100',
  opacity: '$ul$0',
  visibility: 'hidden',
  transform: 'translateY(-$px$8)',
  transition: 'all 0.2s ease',

  '@xs_max': {
    minWidth: '$px$120',
  },

  variants: {
    isOpen: {
      true: {
        opacity: '$ul$1',
        visibility: 'visible',
        transform: 'translateY(0)',
      },
    },
  },
});

const DropdownList = styled('ul', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const DropdownItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$rem$0_87 $rem$0_93',
  borderRadius: '$px$6',
  cursor: 'pointer',
  fontSize: '$rem$0_87',
  fontWeight: '$fontWeight$bold',
  color: '$foreground',
  transition: 'background-color 0.15s ease',
  userSelect: 'none',
  margin:'$px$2 0',

  '&:hover': {
    backgroundColor: '$primary',
    color: '$white',
  },
  '@xs_max': {
    padding: '$rem$0_62 $rem$0_75',
    fontSize: '$rem$0_68',
    fontWeight: '$fontWeight$bold',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$primary',
        color: '$white',
        fontWeight: '$fontWeight$semibold',
      },
    },
  },
});

const ItemText = styled(Text, {
  fontSize: '$rem$0_87',
  fontWeight: 'inherit',
});

export function LanguageDropdown<T>({
  options,
  selected,
  getLabel,
  getKey,
  onChange,
  showIcon = false,
}: TSelectComponentProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SelectWrapper ref={wrapperRef}>
      <SelectButton
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {showIcon && <GlobeIcon color="text" />}
        <SelectText>{selected ? getLabel(selected) : 'Select'}</SelectText>
        <ChevronDown
          css={{
            color: '$primary',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'all .3s ease',
          }}
        />
      </SelectButton>

      <DropdownContainer isOpen={isOpen}>
        <DropdownList role="listbox">
          {options.map((item) => (
            <DropdownItem
              key={getKey(item)}
              isSelected={selected === item}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={selected === item}
            >
              <ItemText>{getLabel(item)}</ItemText>
              {selected === item && <CheckIcon color="$white" />}
            </DropdownItem>
          ))}
        </DropdownList>
      </DropdownContainer>
    </SelectWrapper>
  );
}
