import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  CircleClose,
  LocationIcon,
  SearchIcon,
} from '@/components/svgs';
import {
  DisplayText,
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
import { LOCATION_DATA } from '@/constants';
import { Box, Flex } from '@/components/elements';

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'PROVINCE' | 'CITY'>('PROVINCE');
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');

  // Close dropdown if clicking outside.
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  // Handler: When a Province is clicked
  const handleProvinceSelect = (province: string) => {
    setSelectedProvince(province);
    setView('CITY');
    setSearchQuery('');
  };

  // Handler: When a City is clicked
  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsOpen(false);
    setSearchQuery(''); // Reset search
  };

  // Helper to get text for the trigger button
  const getDisplayText = () => {
    if (selectedCity) return `${selectedCity}, ${selectedProvince}`;
    if (selectedProvince) return selectedProvince;
    return 'Select Location';
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProvince(null);
    setSelectedCity(null);
    setView('PROVINCE');
    setIsOpen(false);
    setSearchQuery('');
  };

  // --- SEARCH LOGIC ---
  const getFilteredItems = () => {
    const query = searchQuery.toLowerCase();

    if (view === 'PROVINCE') {
      const provinces = Object.keys(LOCATION_DATA);
      if (!query) return provinces;
      return provinces.filter((province) =>
        province.toLowerCase().includes(query),
      );
    }

    if (view === 'CITY' && selectedProvince) {
      const cities = LOCATION_DATA[selectedProvince] || [];
      if (!query) return cities;
      return cities.filter((city) => city.toLowerCase().includes(query));
    }

    return [];
  };

  const filteredList = getFilteredItems();

  return (
    <Box css={{ marginTop: '$rem$2' }}>
      <SearchWrapper ref={wrapperRef} align={'center'}>
        {/*Service Search */}
        <ServiceInputGroup align={'center'}>
          <SearchIcon
            width={20}
            height={20}
            css={{ color: '$secondryHeading' }}
          />
          <Input placeholder="Search for service" />
        </ServiceInputGroup>

        {/*Location Dropdown */}
        <LocationTrigger
          align={'center'}
          justify={'between'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Flex align={'center'} gap={'8'}>
            <LocationIcon
              css={{ color: '$secondryHeading', flexShrink: '0' }}
            />
            <DisplayText
              title={getDisplayText()}
              textEllipsis={'1'}
              css={{
                fontWeight: selectedProvince
                  ? '$fontWeight$semibold'
                  : 'normal',
              }}
            >
              {getDisplayText()}
            </DisplayText>
          </Flex>

          {selectedProvince ? (
            <Box onClick={clearSelection} css={{ padding: '$px$4' }}>
              <CircleClose css={{ color: '$secondryHeading' }} />
            </Box>
          ) : (
            <ChevronDown
              css={{
                color: '$dGreen',
                transition: 'transform 0.2s ease',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          )}

          {/* --- THE DROPDOWN ---*/}
          {isOpen && (
            <DropdownMenu onClick={(e) => e.stopPropagation()}>
              <DropdownHeader>
                <DropdownSearch
                  placeholder={
                    view === 'PROVINCE' ? 'Search Province' : 'Search City'
                  }
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </DropdownHeader>

              <ListContainer>
                {view === 'PROVINCE' &&
                  filteredList.map((province) => (
                    <ListItem
                      key={province}
                      onClick={() => handleProvinceSelect(province)}
                    >
                      {province}
                    </ListItem>
                  ))}

                {view === 'CITY' && (
                  <>
                    {searchQuery === '' && (
                      <ListItem
                        css={{ fontSize: '$px$10' }}
                        onClick={(e) => clearSelection(e)}
                      >
                        Clear selection
                      </ListItem>
                    )}

                    {filteredList.map((city) => (
                      <ListItem
                        key={city}
                        onClick={() => handleCitySelect(city)}
                      >
                        {city}
                      </ListItem>
                    ))}

                    {filteredList.length === 0 && (
                      <ListItem
                        css={{
                          cursor: 'default',
                          '&:hover': { background: 'transparent' },
                        }}
                      >
                        No results found
                      </ListItem>
                    )}
                  </>
                )}
              </ListContainer>
            </DropdownMenu>
          )}
        </LocationTrigger>

        {/* Search Button */}
        <SearchBtn>Search</SearchBtn>
      </SearchWrapper>
    </Box>
  );
}
