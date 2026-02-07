import { Flex, Text, Box, Input } from '@/components/elements';
import { StickyPageHeader } from '@/components/ui';
import {
  Heading,
  RoutePageHeader,
  SubHeading,
} from '@/views/Home/components/style';
import { useTranslation } from 'react-i18next';
import { TCategoriesHeaderProps } from '../types';

export const CategoriesHeader = ({
  title,
  subtitle,
  showSearch = false,
  searchTerm = '',
  onSearchChange,
  filteredCount = 0,
  isSticky = false,
  isLoading = false,
}: TCategoriesHeaderProps) => {
  const { t } = useTranslation();
  const headerContent = (
    <Flex
      justify={'center'}
      direction={'column'}
      css={{ marginTop: '$px$25', '@sm_max': { marginTop: '$px$8' } }}
    >
      <Heading>
        {title}{' '}
        <Text gradient="3" css={{ fontWeight: '$fontWeight$semibold' }}>
          {t('Nav.Categories')}
        </Text>
      </Heading>
      <SubHeading>{subtitle}</SubHeading>
    </Flex>
  );

  if (!showSearch) {
    return headerContent;
  }

  return (
    <StickyPageHeader
      isSticky={isSticky}
      heading={headerContent}
      topOffset="$px$60"
      border={false}
    >
      <RoutePageHeader
        justify="between"
        align="center"
        css={{ '@sm_max': { flexDirection: 'column', gap: '$px$8' } }}
      >
        <Text heading="h4" css={{ color: '$textDark', textAlign: 'center' }}>
          {isLoading ? '...' : filteredCount} {t('Action.Available')}{' '}
          {t('Nav.Categories')}{' '}
          {searchTerm.trim() && (
            <Text css={{ fontWeight: '$fontWeight$bold' }}>
              {`for "${searchTerm}"`}
            </Text>
          )}
        </Text>

        <Box>
          <Input
            maxLength={30}
            variant="outline"
            inputSize="md"
            placeholder={t('Inputs.SearchCategory')}
            value={searchTerm}
            onChange={(e) => onSearchChange?.(e.target.value)}
            aria-label="Search categories"
          />
        </Box>
      </RoutePageHeader>
    </StickyPageHeader>
  );
};
