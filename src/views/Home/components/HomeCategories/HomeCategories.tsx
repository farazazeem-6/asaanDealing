import { Button, Flex, Text } from '@/components/elements';
import { CategoryCardsGrid, HomeCategoriesWrapper } from './style';
import { TEXT } from '@/constants';
import { CategoryCard, CategoryCardSkeleton } from '@/components/ui';
import { useScreenWidth } from '@/hooks';
import { Heading, SubHeading } from '../style';
import { useTranslation } from 'react-i18next';
import { useGetTaskerCategories } from '@/services';
import { useMemo } from 'react';
import { generateUniqueIds } from '@/utils/helpers';

export const HomeCategories = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetTaskerCategories({
    enabled: true,
  });

  const { t } = useTranslation();
  const { isMobile } = useScreenWidth();
  const allCategories = categories || [];

  const visibleCategories = isMobile
    ? allCategories.slice(0, 6)
    : allCategories.slice(0, 10);

  const skeletonCount = isMobile ? 6 : 10;
  const skeletonKeys = useMemo(
    () => generateUniqueIds(skeletonCount, 'category'),
    [skeletonCount],
  );

  return (
    <HomeCategoriesWrapper>
      <Flex justify={'center'} direction={'column'}>
        <Heading>
          {t(TEXT.CATEGORY.TITLE)}{' '}
          <Text gradient={'3'} css={{ fontWeight: '$fontWeight$semibold' }}>
            {t('HomeContent.Categories')}
          </Text>
        </Heading>
        <SubHeading>{t(TEXT.CATEGORY.SUBTITLE)}</SubHeading>
      </Flex>

      <CategoryCardsGrid>
        {isLoading || isError
          ? skeletonKeys.map((key) => <CategoryCardSkeleton key={key} />)
          : visibleCategories.map((item) => (
              <CategoryCard key={item.id} data={item} />
            ))}
      </CategoryCardsGrid>

      <Flex justify={'center'} css={{ marginTop: '$rem$1' }}>
        <Button variant={'primary'}>{t('Action.ViewAll')}</Button>
      </Flex>
    </HomeCategoriesWrapper>
  );
};
