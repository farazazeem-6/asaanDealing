export type TTaskerCategoryCard = {
  id: number;
  name: string;
  metadata: {
    image?: Record<string, string>;
  };
  media: {
    icons: Record<string, string>;
    images: Record<string, string>;
  };
};