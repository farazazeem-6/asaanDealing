'use client';
import React from 'react';
import { TTabItem } from '../types';
import { TabButton, TabsContainer } from './style';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          isActive={activeTab === tab.value}
          onClick={() => onTabChange(tab.value)}
        >
          {t(tab.label)}
        </TabButton>
      ))}
    </TabsContainer>
  );
};
