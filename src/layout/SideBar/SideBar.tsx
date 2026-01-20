import { NextImage, Button } from '@/components/elements';
import {
  CloseIconButton,
  SideBarContent,
  SideBarNav,
  SidebarOverlay,
  SidebarWrapper,
} from './style';
import { usePathname } from 'next/navigation';
import { HeaderContainer, Logo, LogoTitle, NavItem } from '../style';
import { MAIN_NAV_ITEMS } from '@/config';
import { TSideBarProps } from '../types';
import { useTranslation } from 'react-i18next';

export function SideBar({ onClose, isSideBarOpen }: TSideBarProps) {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <SidebarOverlay className={isSideBarOpen ? 'open' : ''}>
      <SidebarWrapper className={isSideBarOpen ? 'open' : ''}>
        <SideBarContent>
          <HeaderContainer>
            <Logo>
              <NextImage
                src="/asaan_dealing.svg"
                width={50}
                height={50}
                alt="Asaan Dealing"
              />
              <LogoTitle
                css={{ fontWeight: '$fontWeight$semibold' }}
                heading={'paragraph'}
              >
                Dealing
              </LogoTitle>
            </Logo>
            <CloseIconButton
              width="15"
              height="15"
              onClick={() => onClose(true)}
            ></CloseIconButton>
          </HeaderContainer>

          <SideBarNav>
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <NavItem location={'sidebar'} key={item.href} active={isActive}>
                  {t(`Nav.${item.label}`)}
                </NavItem>
              );
            })}
          </SideBarNav>
          <Button variant={'outline'}>{t('Action.BecomeTasker')}</Button>
          <Button variant={'outline'}>{t('Action.PostTask')}</Button>
        </SideBarContent>
      </SidebarWrapper>
    </SidebarOverlay>
  );
}
