'use client';
import React from 'react';
import {
  CardWrapper,
  ContentLayer,
  HoverBackground,
  IconCircle,
  CategoryTitle,
  ContentImg,
} from './style';
import { TCategoryItem } from '../types';
import { useTranslation } from 'react-i18next';

type TCategoryCardProps = {
  data: TCategoryItem;
};

export const CategoryCard: React.FC<TCategoryCardProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <CardWrapper>
      <HoverBackground css={{ backgroundImage: `url(${data.hoverBgSrc})` }} />
      <ContentLayer>
        <IconCircle>
          <ContentImg size={200} src={data.iconSrc} alt={data.title} />
        </IconCircle>
        <CategoryTitle>{t(data.title)}</CategoryTitle>
      </ContentLayer>
    </CardWrapper>
  );
};
