import { CategoryCard, CategoryCardSkeleton, EmptyBox } from '@/components/ui';
import { useMemo } from 'react';
import { generateUniqueIds } from '@/utils/helpers';
import { CategoryCardsGrid } from './style';
import { TCategoriesGridProps } from '../types';
import { Box } from '@/components/elements';
import { useTranslation } from 'react-i18next';

export const CategoriesGrid = ({
  categories,
  isLoading,
  isError,
  skeletonCount = 10,
  searchTerm,
}: TCategoriesGridProps & { searchTerm?: string }) => {
  const { t } = useTranslation();
  const skeletonKeys = useMemo(
    () => generateUniqueIds(skeletonCount, 'category'),
    [skeletonCount],
  );

  if (isLoading || isError) {
    return (
      <CategoryCardsGrid>
        {skeletonKeys.map((key) => (
          <CategoryCardSkeleton key={key} />
        ))}
      </CategoryCardsGrid>
    );
  }

  return (
    <CategoryCardsGrid>
      {categories.length > 0 ? (
        categories.map((item) => <CategoryCard key={item.id} data={item} />)
      ) : (
        <Box css={{ gridColumn: '1 / -1', width: '$percent$100' }}>
          <EmptyBox
            message={t('Messages.NoCategoryFound')}
            subMessage={`${t('Messages.NoMatchingFound')} "${searchTerm}"`}
          />
        </Box>
      )}
    </CategoryCardsGrid>
  );
};
