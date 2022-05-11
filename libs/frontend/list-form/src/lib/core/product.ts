export interface IProduct {
  name: string;
  location: string;
  unit: string | null;
  producer: string | null;
  image: File | null | string;
  description: string | null;
  count: number;
}
