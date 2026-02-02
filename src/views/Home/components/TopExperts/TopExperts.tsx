'use client';
import { Flex, Text } from '@/components/elements';
import {
  CardsGrid,
  HeadingRow,
  TopExpertBody,
  TopExpertWrapper,
  ViewMoreLink,
} from './style';
import { Heading, SubHeading } from '../style';
import { useTranslation } from 'react-i18next';
import { TEXT } from '@/constants';
import { FilterTabs, TaskerCard, TaskerCardSkeleton } from '@/components/ui';
import { useEffect, useMemo, useState } from 'react';
import { ArrowWithTail } from '@/components/svgs';
import { useGetServicesByCategory, useGetTaskerByServices } from '@/services';
import { useScreenWidth } from '@/hooks';
import { generateUniqueIds } from '@/utils/helpers';

export const TopExpertSection = () => {
  const { isMobile } = useScreenWidth();
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const { t } = useTranslation();
  const { data: services } = useGetServicesByCategory({
    enabled: true,
  });

  // Get display services (show first 4 services in a scrollable row)
  const displayServices = useMemo(() => {
    return services?.slice(0, 4) || [];
  }, [services]);

  // Set the first tab as active when services load
  useEffect(() => {
    if (displayServices.length > 0 && activeTab === null) {
      setActiveTab(displayServices[0].id);
    }
  }, [displayServices, activeTab]);

  // Only fetch taskers when activeTab is set
  const { data: taskersServices = [], isFetching: taskersFetching } =
    useGetTaskerByServices({
      serviceIds: activeTab || undefined,
      enabled: activeTab !== null && activeTab !== undefined,
    });

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  // Determine number of cards to show: 4 on mobile, 8 on desktop
  const maxCards = isMobile ? 4 : 8;

  // Generate unique skeleton keys
  const skeletonKeys = useMemo(
    () => generateUniqueIds(maxCards, 'skeleton'),
    [maxCards],
  );

  return (
    <TopExpertWrapper>
      <Flex justify={'center'} direction={'column'}>
        <Heading>
          {t(TEXT.EXPERT.TITLE)}{' '}
          <Text gradient={'3'} css={{ fontWeight: '$fontWeight$semibold' }}>
            {t(TEXT.EXPERT.TOWN)}
          </Text>
        </Heading>
        <SubHeading>{t(TEXT.EXPERT.SUBTITLE)}</SubHeading>
      </Flex>
      <TopExpertBody>
        <HeadingRow>
          <FilterTabs
            tabs={displayServices}
            activeTab={activeTab || 0}
            onTabChange={handleTabChange}
          />
          <Flex align={'center'} gap={'2'}>
            <ViewMoreLink>{t('Action.ViewMore')}</ViewMoreLink>
            <ArrowWithTail css={{ color: '$primary' }} />
          </Flex>
        </HeadingRow>

        <CardsGrid>
          {taskersFetching ? (
            // Show skeleton cards while loading (4 on mobile, 8 on desktop)
            skeletonKeys.map((key) => <TaskerCardSkeleton key={key} />)
          ) : taskersServices.length > 0 ? (
            // Show actual tasker cards (limited to maxCards)
            taskersServices
              .slice(0, maxCards)
              .map((tasker) => <TaskerCard key={tasker.id} data={tasker} />)
          ) : (
            // Show empty state if no taskers found
            <Flex
              justify={'center'}
              align={'center'}
              css={{
                gridColumn: '1 / -1',
                padding: '$px$40',
                color: '$secondryHeading',
              }}
            >
              <Text>No taskers found for this service</Text>
            </Flex>
          )}
        </CardsGrid>
      </TopExpertBody>
    </TopExpertWrapper>
  );
};
