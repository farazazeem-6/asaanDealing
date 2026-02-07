import { Box, Button, Flex } from '@/components/elements';
import { HomeCategoriesWrapper } from './style';
import { TEXT } from '@/constants';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { CategoriesGrid, CategoriesHeader } from '@/components/ui/Categories';
import { useScreenWidth } from '@/hooks';
import { useCategories } from '@/components/ui/hook';

export const HomeCategories = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { isMobile } = useScreenWidth();

  const limit = isMobile ? 6 : 10;
  const { categories, isLoading, isError } = useCategories(limit);

  return (
    <HomeCategoriesWrapper>
      <Box css={{ marginBottom: '$px$40' }}>
        <CategoriesHeader
          title={t(TEXT.CATEGORY.TITLE)}
          subtitle={t(TEXT.CATEGORY.SUBTITLE)}
          showSearch={false}
        />
      </Box>

      <CategoriesGrid
        categories={categories}
        isLoading={isLoading}
        isError={isError}
        skeletonCount={limit}
      />
      <Flex justify="center" css={{ marginTop: '$rem$1' }}>
        <Button
          variant="primary"
          onClick={() => router.push('/find-tasker/categories')}
        >
          {t('Action.ViewAll')}
        </Button>
      </Flex>
    </HomeCategoriesWrapper>
  );
};
