import { Wrapper } from '@/components/styles/global';
import {
  DownLoadApp,
  HeroSection,
  HomeCategories,
  TopExpertSection,
} from './components';

export const Home = () => {
  return (
    <Wrapper>
      {/* Hero Section  */}
      <HeroSection />
      {/* Categories Section  */}
      <HomeCategories />
      {/* Top Expert Section  */}
      <TopExpertSection />
      {/* Download App Section  */}
      <DownLoadApp />
    </Wrapper>
  );
};
