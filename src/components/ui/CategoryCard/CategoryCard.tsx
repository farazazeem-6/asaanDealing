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
import { TTaskerCategoryCard } from '../types';
import { USER_MOCK_AVATAR } from '@/constants';

type TCategoryCardProps = {
  data: TTaskerCategoryCard;
};

export const CategoryCard: React.FC<TCategoryCardProps> = ({ data }) => {
  const iconUrls = data.media?.icons ? Object.values(data.media.icons) : [];
  const iconSrc = iconUrls.length > 0 ? iconUrls[0] : USER_MOCK_AVATAR;

  const hoverBgSrc = data.metadata?.image?.['2'] || '';
  return (
    <CardWrapper>
      <HoverBackground
        css={{ backgroundImage: hoverBgSrc ? `url(${hoverBgSrc})` : 'none' }}
      />
      <ContentLayer>
        <IconCircle>
          <ContentImg src={iconSrc} alt={data.name} />
        </IconCircle>
        <CategoryTitle>{data.name}</CategoryTitle>
      </ContentLayer>
    </CardWrapper>
  );
};
