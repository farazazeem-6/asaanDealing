export type TServiceData = {
  id: number;
  name: string;
  slug: string;
  description: string;
  metadata?: {
    image?: { [key: string]: string };
    workMode?: string;
    coreSkills?: string[];
    default_description?: string;
  };
  media?: {
    images?: { [key: string]: string };
  } | null;
};
