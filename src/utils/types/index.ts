export type TApiResponse<T> = {
  message: string;
  data: T;
  code: number;
};

export * from './sizes';
export * from './location';
export * from './platformStats';
export * from './tasker-categories';
export * from './tasker';
export * from './profile';
export * from './login';
export * from './wishlist';
