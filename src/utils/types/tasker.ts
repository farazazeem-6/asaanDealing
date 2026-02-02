import { SellerServiceStatus } from '../enums';
import { TLocationItem } from './location';
import { TUserProfile } from './profile';
import { TServicesByCategory } from './tasker-categories';

export type TServiceImages = {
  [imageName: string]: string;
};

export type TSocialLinks = {
  linkedin: string;
  twitter: string;
  facebook: string;
  instagram: string;
};

export type TServiceTaskerID = {
  id: number;
  bio: string;
  expertise: string;
  socials: TSocialLinks | null;
  createdAt: string;
  userId: TUserProfile;
  townIds: string;
  address: string;
};
type TTown = {
  id: number;
  name: string;
  slug: string;
  isEnabled: boolean;
  rank: number;
  createdAt: string;
  updatedAt: string;
};
type TTaskerServiceMedia = {
  [key: string]: {
    images: TServiceImages;
    videos?: TServiceImages;
  };
};

type TTaskerServiceCity = {
  id: number;
  createdAt: string;
  isEnabled: boolean;
  name: string;
  rank: number;
  slug: string;
  updatedAt: string;
  stateId: TLocationItem;
};
type TAvailableTimeRange = {
  timeStart: string;
  timeEnd: string;
};
export type TTaskerService = {
  id: number;
  description: string | null;
  availability: Record<string, TAvailableTimeRange[]>;
  coreSkills: string[] | null;
  coverImageKey: TServiceImages;
  coverImage: TServiceImages;
  experience: number;
  experienceLevel: string;
  rate: number;
  cityId: TTaskerServiceCity;
  status: SellerServiceStatus;
  media: TTaskerServiceMedia | null;
  townIds: number[] | null;
  towns?: TTown[];
  createdAt: string;
  isEnabled: boolean;
  taskerId: TServiceTaskerID;
  serviceId: TServicesByCategory;
  subServiceIds: number[] | null;
  socials: TSocialLinks | null;
  workMode?: string;
  address?: string;
  subServices: TServicesByCategory[] | null;
};
