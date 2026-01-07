import { Button, Flex, Text } from '@/components/elements';
import {
  CategoryCardsGrid,
  HomeCategoriesWrapper,
} from './style';
import { CATEGORY_DATA, TEXT } from '@/constants';
import { CategoryCard } from '@/components/ui';
import { useScreenWidth } from '@/hooks';
import { Heading, SubHeading } from '../style';

export const HomeCategories = () => {
  const { isMobile } = useScreenWidth();

  const visibleCategories = isMobile
    ? CATEGORY_DATA.slice(0, 6)
    : CATEGORY_DATA;

  return (
    <HomeCategoriesWrapper>
      <Flex justify={'center'} direction={'column'}>
        <Heading>
          {TEXT.CATEGORY.TITLE}
          <Text gradient={'3'} css={{ fontWeight: '$fontWeight$semibold' }}>
            Categories
          </Text>
        </Heading>
        <SubHeading>{TEXT.CATEGORY.SUBTITLE}</SubHeading>
      </Flex>

      <CategoryCardsGrid>
        {visibleCategories.map((item) => (
          <CategoryCard key={item.id} data={item} />
        ))}
      </CategoryCardsGrid>
      <Flex justify={'center'} css={{ marginTop: '$rem$1' }}>
        <Button variant={'primary'}>View All</Button>
      </Flex>
    </HomeCategoriesWrapper>
  );
};
