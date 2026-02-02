import { TSocialKey } from '@/constants';
import { TProfileImage } from './login';
import { TOriginalWishlistArray } from './wishlist';

export type TUserDOB = {
  day: number;
  month: number;
  year: number;
};
export type TUserVerifications = {
  email: boolean;
  phoneNumber: boolean;
};
type TCountry = {
  id: number;
  name: string;
  slug: string;
  iso2: string;
  iso3: string;
  flagUrl: string;
  currency: string;
  dialingCode: string;
};
type TState = {
  id: number;
  name: string;
  slug: string;
  countryId: TCountry;
};

type TCity = {
  id: number;
  name: string;
  slug: string;
  stateId: TState;
};

type TTown = {
  id: number;
  name: string;
  slug: string;
};

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
  userType: 'Tasker' | 'User' | string;
  userVerifications: TUserVerifications;
  cityId: TCity | null;
  townId: TTown | null;
  socials?: Partial<Record<TSocialKey, string>>;
  createdAt?: string;
  reportedServices?: number[];
  reportedTasks?: number[];
  userWishlist?: TOriginalWishlistArray | null;
};
