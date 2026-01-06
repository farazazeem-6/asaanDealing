import { Divider, StatCard, Text } from '@/components/elements';
import {
  HeroContainer,
  HeroContent,
  HeroSubTitle,
  PopularHeading,
  PopularSearchLabel,
  PopularSearchWrapper,
  StatCardsWrapper,
} from './style';
import { Fragment, useEffect, useState } from 'react';
import { useScreenWidth } from '@/hooks';
import { TypingText } from '../TypingText';
import { GlobalSearch } from '../GlobalSearch';
import { popularSearches, statsData } from '@/constants';
import { HeroImageSlider } from '../HeroImageSlider';

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
    <HeroContainer>
      <HeroContent>
        <Text heading={'h3'}>
          The easiest way to find and book experts
          <br />
          {isSmMax ? (
            ''
          ) : (
            <>
              for <TypingText activeIndex={activeIndex} />
            </>
          )}
        </Text>
        <HeroSubTitle heading={'h5'}>
          Browse, Book, or Get Booked — the choice is yours.
        </HeroSubTitle>
        {/* Global Search Component  */}
        <GlobalSearch />

        <PopularHeading>Popular Searches</PopularHeading>
        <PopularSearchWrapper gap={'10'}>
          {popularSearches.map((item) => (
            <PopularSearchLabel key={item}>{item}</PopularSearchLabel>
          ))}
        </PopularSearchWrapper>
        <StatCardsWrapper>
          {statsData.map((data, index) => (
            <Fragment key={data.label}>
              <StatCard
                key={data.label}
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
    </HeroContainer>
  );
};
