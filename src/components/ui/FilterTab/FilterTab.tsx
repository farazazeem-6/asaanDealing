import React from 'react';
import { TTabItem } from '../types';
import { TabButton, TabsContainer } from './style';

export type TFilterTabsProps = {
  tabs: TTabItem[];
  activeTab: string;
  onTabChange: (val: string) => void;
};

export const FilterTabs: React.FC<TFilterTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          isActive={activeTab === tab.value}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabsContainer>
  );
};
