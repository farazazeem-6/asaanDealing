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
import { popularSearches, statsData, TEXT } from '@/constants';
import { HeroImageSlider } from '../HeroImageSlider';
import { TStatItemProps } from '../types';

// Stat Card Component
const StatCard = ({ icon: Icon, number, label }: TStatItemProps) => {
  const animatedValue = useCountUp(number);

  return (
    <CardContainer align={'center'}>
      <IconBox justify={'center'} align={'center'}>
        <Icon
          css={{ color: '$white' }}
          width={20}
          height={20}
          strokeWidth={3}
        />
      </IconBox>
      <Flex direction={'column'}>
        <CountText>{animatedValue}+</CountText>
        <LabelText>{label}</LabelText>
      </Flex>
    </CardContainer>
  );
};

export const HeroSection = () => {
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
          {TEXT.HOME.TITLE}
          <br />
          {isSmMax ? (
            ''
          ) : (
            <>
              for <TypingText activeIndex={activeIndex} />
            </>
          )}
        </Text>
        <Text heading={'h5'}>{TEXT.HOME.SUBTITLE}</Text>

        {/* Global Search Component */}
        <GlobalSearch />

        <PopularHeading>Popular Searches</PopularHeading>
        <PopularSearchWrapper>
          {popularSearches.map((item) => (
            <PopularSearchLabel key={item}>{item}</PopularSearchLabel>
          ))}
        </PopularSearchWrapper>

        <StatCardsWrapper>
          {statsData.map((data, index) => (
            <Fragment key={data.id || data.label}>
              <StatCard
                icon={data.icon}
                number={data.number}
                label={data.label}
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
