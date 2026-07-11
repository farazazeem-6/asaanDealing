export type TLocationItem = {
  id: number;
  name: string;
  slug: string;
};

export type TStateResponse = {
  data: {
    states: TLocationItem[];
  };
};

export type TCityResponse = {
  data: { cities: TLocationItem[] };
};

export type TTownResponse = {
  data: { towns: TLocationItem[] };
};
