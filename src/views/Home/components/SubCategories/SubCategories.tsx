import { Box, Flex, Input, Text } from '@/components/elements';
import { TEXT } from '@/constants';
import {
  Heading,
  RoutePageHeader,
  SubHeading,
} from '@/views/Home/components/style';
import { useTranslation } from 'react-i18next';
import { ServiceCardGrid } from './style';
import { ServiceCard, ServiceCardSkeleton } from '@/components/ui/ServiceCard';
import { useGetServicesByCategory } from '@/services';
import { useMemo, useState } from 'react';
import { generateUniqueIds } from '@/utils/helpers';
import { EmptyBox } from '@/components/ui/EmptyBox';
import { StickyPageHeader } from '@/components/ui/StickyPageHeader';

export default function SubCategory() {
  const { data: services, isLoading: ServicesFetching } =
    useGetServicesByCategory({
      enabled: true,
    });
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = useMemo(() => {
    if (!services) return [];
    if (!searchTerm.trim()) return services;

    const lowerCaseSearch = searchTerm.toLowerCase();
    return services.filter((service) =>
      service.name.toLowerCase().includes(lowerCaseSearch),
    );
  }, [services, searchTerm]);
  // Generate unique skeleton keys
  const skeletonKeys = useMemo(
    () => generateUniqueIds(8, 'taskerSkeleton'),
    [],
  );
  const headerContent = (
    <Flex
      justify={'center'}
      direction={'column'}
      css={{ marginTop: '$px$25', '@sm_max': { marginTop: '$px$8' } }}
    >
      <Heading>
        {t(TEXT.STRING.AVAILABLE)}{' '}
        <Text gradient={'3'} css={{ fontWeight: '$fontWeight$semibold' }}>
          {t('Nav.Services')}
        </Text>
      </Heading>
      <SubHeading>{t(TEXT.SERVICES.SUBTITLE)}</SubHeading>
    </Flex>
  );
  return (
    <Box>
      <StickyPageHeader
        isSticky={true}
        heading={headerContent}
        topOffset={'60px'}
        border={false}
      >
        <RoutePageHeader>
          <Text heading="h4" css={{ color: '$textDark', textAlign: 'center' }}>
            {ServicesFetching ? '...' : filteredServices.length}{' '}
            {t('Action.Available')} {t('Nav.Services')}{' '}
            {searchTerm.trim() && (
              <Text
                css={{ fontWeight: '$fontWeight$bold' }}
              >{`for "${searchTerm}"`}</Text>
            )}
          </Text>
          <Box>
            <Input
              maxLength={30}
              variant="outline"
              inputSize="md"
              placeholder={t('Inputs.ServiceInput')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search services"
            />
          </Box>
        </RoutePageHeader>
      </StickyPageHeader>
      <ServiceCardGrid>
        {ServicesFetching ? (
          skeletonKeys.map((key) => <ServiceCardSkeleton key={key} />)
        ) : filteredServices.length > 0 ? (
          filteredServices?.map((service) => (
            <ServiceCard key={service.id} Service={service} />
          ))
        ) : (
          <Box css={{ gridColumn: '1 / -1', width: '$percent$100' }}>
            <EmptyBox
              message={t('Messages.NoServiceFound')}
              subMessage={`${t('Messages.NoMatchingFound')} "${searchTerm}"`}
            />
          </Box>
        )}
      </ServiceCardGrid>
    </Box>
  );
}
