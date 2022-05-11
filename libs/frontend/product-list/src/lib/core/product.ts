export interface IProduct {
  id: string;
  name: string;
  location: string;
  unit: string | null;
  producer: string | null;
  image: null | string;
  description: string | null;
  count: number;
}
