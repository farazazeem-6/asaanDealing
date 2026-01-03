import { AppImage, Button } from '@/components/elements';
import { MenuButton } from '../Header';
import { CloseIcon } from '@/components/svgs';
import {
  LogoTitle,
  SideBarContent,
  SideBarNav,
  SidebarOverlay,
  SidebarWrapper,
} from './style';
import { usePathname } from 'next/navigation';
import { HeaderContainer, Logo, NavItem } from '../style';
import { MAIN_NAV_ITEMS } from '@/config';
import { TSideBarProps } from '../types';

export function SideBar({ onClose }: TSideBarProps) {
  const pathname = usePathname();
  return (
    <SidebarOverlay>
      <SidebarWrapper className="open">
        <SideBarContent>
          <HeaderContainer>
            <Logo gap={'5'}>
              <AppImage
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
            <MenuButton onClick={() => onClose(true)}>
              <CloseIcon width="15" height="15" css={{ fill: '$primary' }} />
            </MenuButton>
          </HeaderContainer>

          <SideBarNav>
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <NavItem location={'sidebar'} key={item.href} active={isActive}>
                  {item.label}
                </NavItem>
              );
            })}
          </SideBarNav>
          <Button variant={'outline'}>Post a Task</Button>
        </SideBarContent>
      </SidebarWrapper>
    </SidebarOverlay>
  );
}
