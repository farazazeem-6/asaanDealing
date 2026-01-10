export interface TTasker {
  id: string;
  name: string;
  profileImage: string;
  level: 'Beginner' | 'Mid Level' | 'Expert';
  isOnsite: boolean;
  services: string[];
  serviceImage: string;
  location: string;
  currency: string;
  price: number;
}
