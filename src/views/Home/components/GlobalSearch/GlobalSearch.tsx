import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  ChevronDown,
  CircleClose,
  LocationIcon,
  SearchIcon,
} from '@/components/svgs';
import {
  DropdownHeader,
  DropdownMenu,
  DropdownSearch,
  Input,
  ListContainer,
  ListItem,
  LocationTrigger,
  SearchBtn,
  SearchWrapper,
  ServiceInputGroup,
} from './style';
import { Box, Flex, Text } from '@/components/elements';
import { useTranslation } from 'react-i18next';
import { useLocationSelector } from '@/hooks/useLocationSelector';

export function GlobalSearch() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const {
    locationOptions,
    isDropdownOpen,
    setIsDropdownOpen,
    selectedValue,
    handleLocationChange,
    handleClearLocation,
    isProvincesLoading,
    isCitiesLoading,
    showingCities,
  } = useLocationSelector();

  // CLICK OUTSIDE LOGIC
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchQuery('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsDropdownOpen]);

  const filteredList = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return locationOptions;
    return locationOptions.filter((opt) =>
      opt.label.toLowerCase().includes(query),
    );
  }, [searchQuery, locationOptions]);

  return (
    <Box css={{ marginTop: '$rem$2' }}>
      <SearchWrapper ref={wrapperRef}>
        <ServiceInputGroup>
          <SearchIcon
            width={20}
            height={20}
            css={{ color: '$secondryHeading' }}
          />
          <Input
            placeholder={t('Inputs.ServiceInput')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </ServiceInputGroup>

        <LocationTrigger onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Flex align={'center'} gap={'8'}>
            <LocationIcon
              css={{ color: '$secondryHeading', flexShrink: '0' }}
            />
            <Text
              title={selectedValue || t('Inputs.SelectLocation')}
              textEllipsis={'1'}
              css={{
                color: selectedValue ? '$primaryHeading' : '$secondryHeading',
                fontWeight: selectedValue ? '$fontWeight$semibold' : '300',
              }}
            >
              {/*LOADING CITIES TEXT */}
              {isProvincesLoading
                ? 'Loading...'
                : isCitiesLoading
                  ? 'Loading Cities...'
                  : selectedValue || t('Inputs.SelectLocation')}
            </Text>
          </Flex>

          {selectedValue ? (
            <Box
              onClick={(e) => {
                e.stopPropagation();
                //CLEAR & CLOSE DROPDOWN
                handleClearLocation(true);
                setIsDropdownOpen(false);
              }}
              css={{ padding: '$px$4' }}
            >
              <CircleClose css={{ color: '$secondryHeading' }} />
            </Box>
          ) : (
            <ChevronDown
              css={{
                color: '$dGreen',
                transition: 'transform 0.2s ease',
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          )}

          {isDropdownOpen && (
            <DropdownMenu onClick={(e) => e.stopPropagation()}>
              <DropdownHeader>
                <DropdownSearch
                  placeholder={
                    !showingCities
                      ? t('Inputs.SelectProvince')
                      : t('Inputs.SelectCity')
                  }
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </DropdownHeader>

              <ListContainer>
                {showingCities && !isCitiesLoading && (
                  <ListItem
                    onClick={() => {
                      handleClearLocation(true);
                      setIsDropdownOpen(false);
                    }}
                    css={{
                      fontSize: '$px$10',
                      color: '$secondryHeading !important',
                    }}
                  >
                    Clear selection
                  </ListItem>
                )}

                {filteredList.map((option) => (
                  <ListItem
                    key={option.value}
                    onClick={() => {
                      handleLocationChange(option.value);
                      setSearchQuery('');
                    }}
                  >
                    {option.label}
                  </ListItem>
                ))}

                {!isCitiesLoading && filteredList.length === 0 && (
                  <ListItem css={{ cursor: 'default' }}>
                    {t('Inputs.NoResultsFound')}
                  </ListItem>
                )}
              </ListContainer>
            </DropdownMenu>
          )}
        </LocationTrigger>

        <SearchBtn>Search</SearchBtn>
      </SearchWrapper>
    </Box>
  );
}
