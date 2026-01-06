import { Flex, Text } from '@/components/elements';
import { Heading, HomeCategoriesWrapper, SubHeading } from './style';

export const categoryImage = [
  '/images/book.png',
  '/images/flash.png',
  '/images/machine.png',
  '/images/spinner.png',
  '/images/stationary.png',
  '/images/tool.png',
  '/images/tripord.png',
  '/images/van.png',
  '/images/grander.png',
];
export const HomeCategories = () => {
  return (
    <HomeCategoriesWrapper>
      <Flex justify={'center'} direction={'column'}>
        <Heading>
          Explore our{' '}
          <Text gradient={'3'} css={{ fontWeight: '$fontWeight$semibold' }}>
            Categories
          </Text>
        </Heading>
        <SubHeading>
          We have simplified our categories to help you find what you need—faster
          and easier.
        </SubHeading>
      </Flex>
    </HomeCategoriesWrapper>
  );
};
