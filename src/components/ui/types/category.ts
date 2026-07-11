import { TTaskerCategory } from '@/utils/types';
import { CSSProperties } from 'react';

export type TTaskerCategoryCard = {
  id: number;
  name: string;
  metadata: {
    image?: Record<string, string>;
  };
  media?: {
    icons?: Record<string, string>;
    images?: Record<string, string>;
  };
};

export type TCategoriesGridProps = {
  categories: TTaskerCategory[];
  isLoading: boolean;
  isError: boolean;
  skeletonCount?: number;
};
export type TCategoriesHeaderProps = {
  title: string;
  subtitle: string;
  showSearch?: boolean;
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
  totalCount?: number;
  filteredCount?: number;
  isSticky?: boolean;
  isLoading?: boolean;
};

export type TCategoriesSectionProps = {
  title: string;
  subtitle: string;
  showSearch?: boolean;
  showViewAllButton?: boolean;
  onViewAllClick?: () => void;
  limit?: number;
  isSticky?: boolean;
  wrapperStyles?: CSSProperties;
};
