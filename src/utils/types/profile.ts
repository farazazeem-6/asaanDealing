import { TSocialKey } from '@/constants';
import { TProfileImage } from './login';
import { TOriginalWishlistArray } from './wishlist';
import { UserType } from '../enums';

export type TUserDOB = {
  day: number;
  month: number;
  year: number;
};
export type TUserVerifications = {
  email: boolean;
  phoneNumber: boolean;
};
export type TCountry = TIdNameSlug & {
  iso2: string;
  iso3: string;
  flagUrl: string;
  currency: string;
  dialingCode: string;
};

export type TState = TIdNameSlug & {
  countryId: TCountry;
};

export type TCity = TIdNameSlug & {
  stateId: TState;
};

export type TTown = TIdNameSlug;

export type TUserProfile = {
  id: number;
  username: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  gender: string | null;
  address: string | null;
  dob: TUserDOB | null;
  profileImage: TProfileImage | null;
  registrationType: 'Email' | 'Phone' | string;
  isNotificationEnabled: boolean;
  userType: UserType;
  userVerifications: TUserVerifications;
  cityId: TCity | null;
  townId: TTown | null;
  socials?: Partial<Record<TSocialKey, string>>;
  createdAt?: string;
  reportedServices?: number[];
  reportedTasks?: number[];
  userWishlist?: TOriginalWishlistArray | null;
};

export type TIdNameSlug = {
  id: number;
  name: string;
  slug: string;
};
