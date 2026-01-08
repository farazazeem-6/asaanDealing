import React, { useState, useRef, useEffect } from 'react';
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
import { LOCATION_DATA } from '@/constants';
import { Box, Flex, Text } from '@/components/elements';
import { LocationEnum } from '@/utils/enums';
import { useTranslation } from 'react-i18next';

export function GlobalSearch() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<LocationEnum.PROVINCE | LocationEnum.CITY>(
    LocationEnum.PROVINCE,
  );
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
    setView(LocationEnum.CITY);
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
    if (selectedCity && selectedProvince) {
      return `${t(`Locations.${selectedCity}`)}, ${t(`Provinces.${selectedProvince}`)}`;
    }
    if (selectedProvince) {
      return t(`Provinces.${selectedProvince}`);
    }
    return t('Inputs.SelectLocation');
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProvince(null);
    setSelectedCity(null);
    setView(LocationEnum.PROVINCE);
    setIsOpen(false);
    setSearchQuery('');
  };

  // --- SEARCH LOGIC ---
  const getFilteredItems = () => {
    const query = searchQuery.toLowerCase();

    // Note: This filters based on the ENGLISH keys in LOCATION_DATA.
    // If you want to search by the Urdu word, you would need to filter
    // against the translated values, which is more complex.

    if (view === LocationEnum.PROVINCE) {
      const provinces = Object.keys(LOCATION_DATA);
      if (!query) return provinces;
      return provinces.filter((province) =>
        province.toLowerCase().includes(query),
      );
    }

    if (view === LocationEnum.CITY && selectedProvince) {
      const cities = LOCATION_DATA[selectedProvince] || [];
      if (!query) return cities;
      return cities.filter((city) => city.toLowerCase().includes(query));
    }

    return [];
  };

  const filteredList = getFilteredItems();

  return (
    <Box css={{ marginTop: '$rem$2' }}>
      <SearchWrapper ref={wrapperRef}>
        {/* Service Search */}
        <ServiceInputGroup>
          <SearchIcon
            width={20}
            height={20}
            css={{ color: '$secondryHeading' }}
          />
          {/* Updated Key: Inputs.ServiceInput */}
          <Input placeholder={t('Inputs.ServiceInput')} />
        </ServiceInputGroup>

        {/* Location Dropdown */}
        <LocationTrigger onClick={() => setIsOpen(!isOpen)}>
          <Flex align={'center'} gap={'8'}>
            <LocationIcon
              css={{ color: '$secondryHeading', flexShrink: '0' }}
            />
            <Text
              title={getDisplayText()}
              textEllipsis={'1'}
              css={{
                fontWeight: selectedProvince
                  ? '$fontWeight$semibold'
                  : 'normal',
              }}
            >
              {getDisplayText()}
            </Text>
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
                    view === LocationEnum.PROVINCE
                      ? t('Inputs.SelectProvince') // Updated Key
                      : t('Inputs.SelectCity') // Updated Key
                  }
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </DropdownHeader>

              <ListContainer>
                {/* PROVINCE LIST */}
                {view === LocationEnum.PROVINCE &&
                  filteredList.map((provinceKey) => (
                    <ListItem
                      key={provinceKey}
                      onClick={() => handleProvinceSelect(provinceKey)}
                    >
                      {/* Dynamic Translation: Provinces.Punjab */}
                      {t(`Provinces.${provinceKey}`)}
                    </ListItem>
                  ))}

                {/* CITY LIST */}
                {view === LocationEnum.CITY && (
                  <>
                    {searchQuery === '' && (
                      <ListItem
                        css={{ fontSize: '$px$10' }}
                        onClick={(e) => clearSelection(e)}
                      >
                        {/* You can add "Clear Selection" to your JSON if you want it translated */}
                        Clear selection
                      </ListItem>
                    )}

                    {filteredList.map((cityKey) => (
                      <ListItem
                        key={cityKey}
                        onClick={() => handleCitySelect(cityKey)}
                      >
                        {/* Dynamic Translation: Locations.Lahore */}
                        {t(`Locations.${cityKey}`)}
                      </ListItem>
                    ))}

                    {filteredList.length === 0 && (
                      <ListItem
                        css={{
                          cursor: 'default',
                          '&:hover': { background: 'transparent' },
                        }}
                      >
                        {/* Updated Key: Inputs.NoResultsFound */}
                        {t('Inputs.NoResultsFound')}
                      </ListItem>
                    )}
                  </>
                )}
              </ListContainer>
            </DropdownMenu>
          )}
        </LocationTrigger>

        {/* Search Button - Updated Key: Action.Search */}
        <SearchBtn>{t('Action.Search')}</SearchBtn>
      </SearchWrapper>
    </Box>
  );
}
