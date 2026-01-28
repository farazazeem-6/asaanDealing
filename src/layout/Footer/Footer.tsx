import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '@/components/styles';
import { LogoTitle } from '../style';
import {
  ASAAD_DEALING_SOCIAL_LINKS,
  POPULAR_SERVICES,
  QUICK_LINKS,
  TEXT,
} from '@/constants';
import { FooterEnum } from '@/utils/enums';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/svgs';

import {
  FooterRoot,
  FooterGrid,
  BrandColumn,
  FooterDescription,
  LinkColumn,
  SectionTitle,
  LinkItem,
  SocialWrapper,
  CopyrightRow,
  MobileLinksRow,
  ScrollToTopBtn,
  IconCircleWrapper,
} from './style';
import { Flex } from '@/components/elements';
import { currentYear, handleScrollTop } from '@/utils/helpers';
import { useGetTaskerCategories } from '@/services';

export const Footer = () => {
  const { t } = useTranslation();
  const { data: categories } = useGetTaskerCategories({
    enabled: true,
  });
  return (
    <Wrapper>
      <FooterRoot>
        <FooterGrid>
          {/* 1. BRAND SECTION */}
          <BrandColumn>
            <Flex align="center" gap="10">
              <Image
                src="/asaan_dealing.svg"
                width={40}
                height={40}
                alt="Asaan Dealing Logo"
              />
              <LogoTitle heading="h4" color="white">
                Dealing
              </LogoTitle>
            </Flex>

            <FooterDescription>{t(TEXT.FOOTER.DISC)}</FooterDescription>

            {/* Desktop Social Icons */}
            <SocialMediaLinks mobileOnly={false} />
          </BrandColumn>

          {/* 2. LINKS SECTION */}
          <MobileLinksRow>
            {/* Quick Links */}
            <LinkColumn>
              <SectionTitle>{t(FooterEnum.QuickLink)}</SectionTitle>
              <LinkItem href="/">{t(QUICK_LINKS.HOME)}</LinkItem>
              <LinkItem href="#">{t(QUICK_LINKS.HOW_IT_WORKS)}</LinkItem>
              <LinkItem href="#">{t(QUICK_LINKS.ABOUT_US)}</LinkItem>
              <LinkItem href="#">{t(QUICK_LINKS.FAQS)}</LinkItem>
              <LinkItem href="#">{t(QUICK_LINKS.CONTACT_US)}</LinkItem>
            </LinkColumn>

            {/* Popular Services */}
            <LinkColumn>
              <SectionTitle>{t(FooterEnum.PopularSearch)}</SectionTitle>
              {POPULAR_SERVICES?.slice(0, 5)?.map((service) => (
                <LinkItem key={service.id} href="#">
                  {t(service.label)}
                </LinkItem>
              ))}
            </LinkColumn>
          </MobileLinksRow>

          {/* 3. CATEGORIES SECTION (Hidden on Mobile) */}
          <LinkColumn hiddenOnMobile>
            <SectionTitle>{t(FooterEnum.PopularCategory)}</SectionTitle>
            {categories?.slice(0, 5)?.map((category) => (
              <LinkItem key={category.id} href="#">
                {t(category.name)}
              </LinkItem>
            ))}
          </LinkColumn>
        </FooterGrid>

        {/* Mobile-only Social Icons */}
        <SocialMediaLinks mobileOnly={true} />
        {/* 4. COPYRIGHT */}
        <CopyrightRow>
          © {currentYear}{' '}
          <ScrollToTopBtn onClick={handleScrollTop}>
            <LogoTitle heading="h5" color="white" css={{ display: 'inline' }}>
              Dealing
            </LogoTitle>
          </ScrollToTopBtn>
          . All rights reserved.
        </CopyrightRow>
      </FooterRoot>
    </Wrapper>
  );
};

// This component prevents repeating code for desktop vs mobile view
const SocialMediaLinks = ({ mobileOnly }: { mobileOnly: boolean }) => {
  return (
    <SocialWrapper mobileOnly={mobileOnly}>
      <IconCircleWrapper
        href={ASAAD_DEALING_SOCIAL_LINKS.facebook}
        target="_blank"
        aria-label="Facebook"
      >
        <FacebookIcon />
      </IconCircleWrapper>
      <IconCircleWrapper
        href={ASAAD_DEALING_SOCIAL_LINKS.twitter}
        target="_blank"
        aria-label="Twitter"
      >
        <TwitterIcon />
      </IconCircleWrapper>
      <IconCircleWrapper
        href={ASAAD_DEALING_SOCIAL_LINKS.instagram}
        target="_blank"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </IconCircleWrapper>
      <IconCircleWrapper
        href={ASAAD_DEALING_SOCIAL_LINKS.linkedin}
        target="_blank"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </IconCircleWrapper>
    </SocialWrapper>
  );
};
