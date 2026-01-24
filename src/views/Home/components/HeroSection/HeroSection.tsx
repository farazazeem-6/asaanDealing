'use client';
import { Divider, Flex, Text } from '@/components/elements';
import {
  CardContainer,
  CountText,
  HeroContent,
  IconBox,
  LabelText,
  PopularHeading,
  PopularSearchLabel,
  PopularSearchWrapper,
  StatCardsWrapper,
} from './style';
import { Fragment, useEffect, useState } from 'react';
import { useCountUp, useScreenWidth } from '@/hooks';
import { TypingText } from '../TypingText';
import { GlobalSearch } from '../GlobalSearch';
import { POPULAR_SERVICES, statsData, TEXT } from '@/constants';
import { HeroImageSlider } from '../HeroImageSlider';
import { TStatItemProps } from '../types';
import { useTranslation } from 'react-i18next';

// Stat Card Component
const StatCard = ({ icon: Icon, number, label }: TStatItemProps) => {
  const { t } = useTranslation();
  const animatedValue = useCountUp(number);
  return (
    <CardContainer>
      <IconBox>
        <Icon
          css={{ color: '$white' }}
          width={20}
          height={20}
          strokeWidth={3}
        />
      </IconBox>
      <Flex direction={'column'}>
        <CountText>{animatedValue}+</CountText>
        <LabelText>{t(label)}</LabelText>
      </Flex>
    </CardContainer>
  );
};

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const { isSmMax } = useScreenWidth();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => prev + 1),
      5000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex justify={'around'}>
      <HeroContent>
        <Text heading={'h3'} css={{ '@md_max': { fontSize: '$rem$2' } }}>
          {t(TEXT.HOME.TITLE)}
          <br />
          {isSmMax ? (
            ''
          ) : (
            <>
              {i18n.language == 'ur' ? (
                <>
                  <TypingText activeIndex={activeIndex} /> {t('Hero.For')}
                </>
              ) : (
                <>
                  {t('Hero.For')} <TypingText activeIndex={activeIndex} />
                </>
              )}
            </>
          )}
        </Text>
        <Text heading={'h5'}>{t(TEXT.HOME.SUBTITLE)}</Text>

        {/* Global Search Component */}
        <GlobalSearch />

        <PopularHeading>{t('Hero.PopularSearches')}</PopularHeading>

        <PopularSearchWrapper>
          {POPULAR_SERVICES.slice(0, 3).map((service) => (
            <PopularSearchLabel key={service.id}>
              {t(service.label)}
            </PopularSearchLabel>
          ))}
        </PopularSearchWrapper>

        <StatCardsWrapper>
          {statsData.map((data, index) => (
            <Fragment key={data.id || data.label}>
              <StatCard
                icon={data.icon}
                number={data.number}
                label={t(data.label)}
              />

              {index < statsData.length - 1 && (
                <Divider orientation="vertical" />
              )}
            </Fragment>
          ))}
        </StatCardsWrapper>
      </HeroContent>
      <HeroImageSlider activeIndex={activeIndex} />
    </Flex>
  );
};
