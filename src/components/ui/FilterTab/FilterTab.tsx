'use client';
import React from 'react';
import { TTabItem } from '../types';
import { TabButton, TabsContainer } from './style';
import { useTranslation } from 'react-i18next';

export type TFilterTabsProps = {
  tabs: TTabItem[];
  activeTab: number | null;
  onTabChange: (val: number) => void;
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
          isActive={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          {t(tab.name)}
        </TabButton>
      ))}
    </TabsContainer>
  );
};
