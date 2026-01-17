'use client';
import { usePathname } from 'next/navigation';
import { Actions, MobileNav, MenuIconButton, NavList } from './style';
import { NextImage, Button, LanguageDropdown } from '@/components/elements';
import { SideBar } from '../SideBar';
import { useState } from 'react';
import { HeaderContainer, Logo, NavItem, StickyHeader } from '../style';
import { MAIN_NAV_ITEMS } from '@/config';
import { Wrapper } from '@/components/styles';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '@/constants';

export function Header() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <StickyHeader>
      <Wrapper>
        <HeaderContainer>
          <Logo>
            <NextImage
              src="/asaan_dealing.svg"
              width={50}
              height={50}
              alt="Asaan Dealing"
            />
          </Logo>
          <NavList css={{ marginLeft: '$px$100' }}>
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <NavItem key={item.href} location={'header'} active={isActive}>
                  {t(`Nav.${item.label}`)}
                </NavItem>
              );
            })}
          </NavList>
          <Actions>
            <Button variant={'outline'}>{t('Action.PostTask')}</Button>
            <Button variant={'outline'}>{t('Action.BecomeTasker')}</Button>
            <Button>{t('Action.SignIn')}</Button>
            <LanguageDropdown
              options={SUPPORTED_LANGUAGES}
              selected={
                SUPPORTED_LANGUAGES.find(
                  (language) => language.identifier === currentLang,
                ) || null
              }
              getLabel={(language) => language.name}
              getKey={(language) => language.identifier}
              showIcon={true}
              onChange={(language) => i18n.changeLanguage(language.identifier)}
            />
          </Actions>

          <MobileNav>
            <LanguageDropdown
              options={SUPPORTED_LANGUAGES}
              selected={
                SUPPORTED_LANGUAGES.find(
                  (language) => language.identifier === currentLang,
                ) || null
              }
              getLabel={(language) => language.name}
              getKey={(language) => language.identifier}
              showIcon={true}
              onChange={(language) => i18n.changeLanguage(language.identifier)}
            />
            <Button variant={'primary'}>{t('Action.SignIn')}</Button>
            <MenuIconButton
              width="25"
              height="25"
              onClick={() => setIsSidebarOpen(true)}
            ></MenuIconButton>
          </MobileNav>
        </HeaderContainer>

        {isSidebarOpen && (
          <SideBar
            isSideBarOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}
      </Wrapper>
    </StickyHeader>
  );
}
