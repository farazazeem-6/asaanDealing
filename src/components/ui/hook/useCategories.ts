'use client';
import { useMemo, useState } from 'react';
import { useGetTaskerCategories } from '@/services';

export const useCategories = (limit?: number) => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetTaskerCategories({
    enabled: true,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const allCategories = useMemo(() => {
    return categories || [];
  }, [categories]);

  // Filter based on search
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return allCategories;
    return allCategories.filter((category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [allCategories, searchTerm]);

  // Limit for display
  const displayCategories = useMemo(() => {
    if (limit) return filteredCategories.slice(0, limit);
    return filteredCategories;
  }, [filteredCategories, limit]);

  return {
    categories: displayCategories,
    allCategories,
    filteredCategories,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
  };
};
