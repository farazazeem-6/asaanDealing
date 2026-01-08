'use client';
import { usePathname } from 'next/navigation';
import { Actions, MobileNav, MenuIconButton, NavList } from './style';
import { NextImage, Button } from '@/components/elements';
import { SideBar } from '../SideBar';
import { useState } from 'react';
import { HeaderContainer, Logo, NavItem, StickyHeader } from '../style';
import { MAIN_NAV_ITEMS } from '@/config';
import { Wrapper } from '@/components/styles';

export function Header() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                  {item.label}
                </NavItem>
              );
            })}
          </NavList>
          <Actions>
            <Button variant={'outline'}>Post a Task</Button>
            <Button variant={'outline'}>Become a Tasker</Button>
            <Button>Sign In</Button>
          </Actions>

          <MobileNav>
            <Button variant={'outline'}>Become a Tasker</Button>
            <Button variant={'primary'}>Sign In</Button>
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
