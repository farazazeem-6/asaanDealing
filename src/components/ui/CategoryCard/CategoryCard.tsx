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

type TCategoryCardProps = {
  data: TCategoryItem;
};

export const CategoryCard: React.FC<TCategoryCardProps> = ({ data }) => {
  return (
    <CardWrapper>
      <HoverBackground css={{ backgroundImage: `url(${data.hoverBgSrc})` }} />
      <ContentLayer>
        <IconCircle>
          <ContentImg src={data.iconSrc} alt={data.title} />
        </IconCircle>
        <CategoryTitle>{data.title}</CategoryTitle>
      </ContentLayer>
    </CardWrapper>
  );
};
