import { Wrapper } from '@/components/styles/global';
import {
  DownloadApp,
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
      <DownloadApp />
    </Wrapper>
  );
};
