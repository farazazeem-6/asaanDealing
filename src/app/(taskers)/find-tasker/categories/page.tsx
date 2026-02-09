'use client';
import { TEXT } from '@/constants';
import { useTranslation } from 'react-i18next';
import { CategoriesGrid, CategoriesHeader } from '@/components/ui/Categories';
import { useCategories } from '@/components/ui/hook';
import { Box } from '@/components/elements';

const AllCategories = () => {
  const { t } = useTranslation();
  const {
    filteredCategories,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    allCategories,
  } = useCategories();

  return (
    <Box>
      <CategoriesHeader
        title={t(TEXT.STRING.AVAILABLE)}
        subtitle={t(TEXT.CATEGORY.SUBTITLE2)}
        showSearch
        isSticky={true}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalCount={allCategories.length}
        filteredCount={filteredCategories.length}
        isLoading={isLoading}
      />

      <CategoriesGrid
        categories={filteredCategories}
        isLoading={isLoading}
        isError={isError}
        skeletonCount={10}
        searchTerm={searchTerm}
      />
    </Box>
  );
};

export default AllCategories;
