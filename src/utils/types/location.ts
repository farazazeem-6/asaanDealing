export type TLocationItem = {
  id: number;
  name: string;
  slug: string;
};

export type TStateResponse = {
  states: TLocationItem[];
};

export type TCityResponse = {
  cities: TLocationItem[];
};

export type TTownResponse = {
  towns: TLocationItem[];
};