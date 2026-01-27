export type TDynamicKeyValueObject = Record<string, string>;

export type TCategoryMetaData = {
  icon: TDynamicKeyValueObject;
  image: TDynamicKeyValueObject;
};

export type TDynamicObjectKeyValue = { [iconName: string]: string };

export type TCategoryMedia = {
  icons: TDynamicObjectKeyValue;
  images: TDynamicObjectKeyValue;
};
export type TTaskerCategory = {
  id: number;
  name: string;
  slug: string;
  description: string;
  metadata: TCategoryMetaData;
  media: TCategoryMedia;
};
