import { ServiceMode } from '../enums';
import { TServiceImages } from './tasker';

export type TStringMap = Record<string, string>;
export type TDynamicKeyValueObject = Record<string, string>;

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


export type TServicesByCategory = {
  id: number;
  name: string;
  slug: string;
  description: string;
  metadata: TTaskerServicesMetaData;
  hasSubServices: boolean;
  media: TServiceImages | null;
  categorySlug?: string;
  categoryId?: number;
};

export type TServicesListing = { [slug: string]: TServicesByCategory[] };
export type TTaskerServicesMetaData = {
  default_description: string;
  workMode: ServiceMode;
  image: TDynamicKeyValueObject;
  coreSkills: string[];
};

export type TTaskerServiceResponse = {
  data: {
    services: TServicesListing[];
  };
};

export type TGetTaskerServices = {
  serviceIds?: number | string;
};
