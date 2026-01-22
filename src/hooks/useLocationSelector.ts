import { useCityListing, useStateListing, useTownListing } from '@/services';
import { useEffect, useMemo, useState } from 'react';

export const useLocationSelector = (
  initialProvince = '',
  initialCity = '',
  initialTown = '',
) => {
  const [selectedProvince, setSelectedProvince] = useState(initialProvince);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedTown, setSelectedTown] = useState(initialTown);
  const [showingCities, setShowingCities] = useState(Boolean(initialCity));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: provinces = [], isLoading: isProvincesLoading } =
    useStateListing('pakistan');

  useEffect(() => {
    if (!selectedProvince || provinces.length === 0) return;
    // If selectedProvince is not a name but an ID, convert it to name
    const provinceById = provinces.find(
      (province) => String(province.id) === selectedProvince,
    );
    if (provinceById && provinceById.name !== selectedProvince) {
      setSelectedProvince(provinceById.name);
    }
  }, [selectedProvince, provinces]);
  const { selectedProvinceSlug, provinceID } = useMemo(() => {
    if (!selectedProvince) return { selectedProvinceSlug: '' };

    const province = provinces.find((prov) => prov.name === selectedProvince);

    return {
      selectedProvinceSlug: province?.slug || '',
      provinceID: province?.id,
    };
  }, [selectedProvince, provinces]);
  const { data: cities = [], isLoading: isCitiesLoading } =
    useCityListing(selectedProvinceSlug);

  // Convert city ID to name if needed (when cities data is loaded)
  useEffect(() => {
    if (!selectedCity || cities.length === 0) return;
    // If selectedCity is not a name but an ID, convert it to name
    const cityById = cities.find((city) => String(city.id) === selectedCity);
    if (cityById && cityById.name !== selectedCity) {
      setSelectedCity(cityById.name);
    }
  }, [selectedCity, cities]);

  const { cityID, selectedCitySlug } = useMemo(() => {
    if (!selectedCity) return { cityID: '', selectedCitySlug: '' };
    const city = cities.find((c) => c.name === selectedCity);
    return { selectedCitySlug: city?.slug || '', cityID: city?.id };
  }, [selectedCity, cities]);

  const { data: towns = [], isLoading: isTownsLoading } =
    useTownListing(selectedCitySlug);

  // Convert town ID to name if needed (when towns data is loaded)
  useEffect(() => {
    if (!selectedTown || towns.length === 0) return;
    // If selectedTown is not a name but an ID, convert it to name
    const townById = towns.find((town) => String(town.id) === selectedTown);
    if (townById && townById.name !== selectedTown) {
      setSelectedTown(townById.name);
    }
  }, [selectedTown, towns]);

  const townID = useMemo(() => {
    if (!selectedTown) return undefined;
    const town = towns.find((town) => town.name === selectedTown);
    return town?.id;
  }, [selectedTown, towns]);

  const locationOptions = useMemo(() => {
    if (isCitiesLoading) return [];

    if (showingCities) {
      return cities.map((city) => ({ label: city.name, value: city.name }));
    }

    return provinces.map((province) => ({ label: province.name, value: province.name }));
  }, [showingCities, provinces, cities, isCitiesLoading]);

  const selectedValue = selectedCity || selectedProvince;

  const selectedOption = useMemo(() => {
    const activeOption = locationOptions.find(
      (option) => option.value === selectedValue,
    ) || { label: selectedValue, value: selectedValue };
    return activeOption;
  }, [locationOptions, selectedValue]);

  const handleLocationChange = (value: string) => {
    if (!showingCities) {
      setSelectedProvince(value);
      setSelectedCity('');
      setSelectedTown('');
    } else {
      setSelectedCity(value);
      setSelectedTown('');
      setIsDropdownOpen(false);
    }
  };

  const clearCity = () => {
    setSelectedCity('');
    setSelectedTown('');
    setShowingCities(false);
    setIsDropdownOpen(true);
  };

  const clearAll = () => {
    setSelectedProvince('');
    setSelectedCity('');
    setSelectedTown('');
    setShowingCities(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (selectedProvince && cities.length > 0 && !showingCities) {
      setShowingCities(true);
    }
  }, [selectedProvince, cities.length, showingCities, setIsDropdownOpen]);

  return {
    provinces,
    cities,
    towns,
    selectedProvince,
    selectedCity,
    selectedTown,
    setSelectedProvince,
    setSelectedCity,
    setSelectedTown,
    handleLocationChange,
    clearAll,
    clearCity,
    showingCities,
    isDropdownOpen,
    setIsDropdownOpen,
    isProvincesLoading,
    isCitiesLoading,
    isTownsLoading,
    locationOptions,
    selectedValue,
    selectedOption,
    provinceID,
    cityID,
    townID,
  };
};
