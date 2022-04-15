export interface IProduct {
  name: string;
  location: string;
  index: number;
  unit: string | null;
  producer: string | null;
  image: File | null;
  description: string | null;
  checked: boolean;
  count: number;
}
