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
import { MOCK_TASKERS, TASKER_TABS, TEXT } from '@/constants';
import { FilterTabs, TaskerCard } from '@/components/ui';
import { useState } from 'react';
import { ArrowWithTail } from '@/components/svgs';

export const TopExpertSection = () => {
  const [activeTab, setActiveTab] = useState(TASKER_TABS[0].value);
  const { t } = useTranslation();
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
            tabs={TASKER_TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <Flex align={'center'} gap={'2'}>
            <ViewMoreLink>{t('Action.ViewMore')}</ViewMoreLink>
            <ArrowWithTail css={{ color: '$primary' }} />
          </Flex>
        </HeadingRow>
        <CardsGrid>
          {MOCK_TASKERS.map((tasker) => (
            <TaskerCard key={tasker.id} data={tasker} />
          ))}
        </CardsGrid>
      </TopExpertBody>
    </TopExpertWrapper>
  );
};
