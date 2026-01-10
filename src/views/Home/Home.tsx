import { Wrapper } from '@/components/styles/global';
import { HeroSection, TopExpertSection } from './components';
import { HomeCategories } from './components';

export const Home = () => {
  return (
    <Wrapper>
      {/* Hero Section  */}
      <HeroSection />
      {/* Categories Section  */}
      <HomeCategories />
      {/* Top Expert Section  */}
      <TopExpertSection />
    </Wrapper>
  );
};
