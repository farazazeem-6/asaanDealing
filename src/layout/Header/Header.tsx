'use client';
import { usePathname } from 'next/navigation';
import { Actions, MenuButton, MobileNav, NavList } from './style';
import { AppImage, Button } from '@/components/elements';
import { Wrapper } from '@/components/styles';
import { MenuIcon } from '@/components/svgs';
import { SideBar } from '../SideBar';
import { useState } from 'react';
import { HeaderContainer, Logo, NavItem } from '../style';
import { MAIN_NAV_ITEMS } from '@/config';

export function Header() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Wrapper>
      <HeaderContainer>
        <Logo>
          <AppImage
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
                {item.label}
              </NavItem>
            );
          })}
        </NavList>
        <Actions>
          <Button variant={'outline'}>Post a Task</Button>
          <Button variant={'outline'}>Become a Tasker</Button>
          <Button variant={'primary'}>Sign In</Button>
        </Actions>

        <MobileNav>
          <Button variant={'outline'}>Become a Tasker</Button>
          <Button variant={'primary'}>Sign In</Button>
          <MenuButton onClick={() => setIsSidebarOpen(true)}>
            <MenuIcon width="25" height="25" css={{ color: '$primary' }} />
          </MenuButton>
        </MobileNav>
      </HeaderContainer>

      {isSidebarOpen && (
        <SideBar
          isSideBarOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </Wrapper>
  );
}
