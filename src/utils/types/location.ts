export type TState = {
  id: number;
  name: string;
  slug: string;
};

export type TStateResponse = {
  states: TState[];
};

export type TCity = {
  id: number;
  name: string;
  slug: string;
};

export type TCityResponse = {
  cities: TCity[];
};

export type TTown = {
  id: number;
  name: string;
  slug: string;
};

export type TTownResponse = {
  towns: TTown[];
};
