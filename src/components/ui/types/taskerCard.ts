export type TService = {
  id: string;
  name: string;
};

export type TTasker = {
  id: string;
  name: string;
  profileImage: string;
  level: 'Beginner' | 'Mid Level' | 'Expert';
  isOnsite: boolean;
  services: TService[];
  serviceImage: string;
  location: string;
  currency: string;
  price: number;
};
