export type TStringMap = Record<string, string>;

export type TCategoryMetaData = {
  icon: TStringMap;
  image: TStringMap;
};

export type TCategoryMedia = {
  icons?: TStringMap;
  images?: TStringMap;
};

export type TTaskerCategory = {
  id: number;
  name: string;
  slug: string;
  description: string;
  metadata: TCategoryMetaData;
  media?: TCategoryMedia;
};

export type TTaskerCategoryResponse = {
  data: {
    categories: TTaskerCategory[];
  };
};
