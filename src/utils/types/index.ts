export type TApiResponse<T> = {
  message: string;
  data: T;
  code: number;
};

export * from './sizes';
export * from './location';
export * from './platformStats';
