export interface IHttpGetProductLists_Product {
  id: string;
  name: string;
  location: string;
  unit: string | null;
  producer: string | null;
  image: null | string;
  description: string | null;
  count: number;
}

export interface IHttpGetProductLists_ProductList {
  products: IHttpGetProductLists_Product[];
  id: string;
  createdAt: string;
}

export interface IHttpGetProductLists {
  data: IHttpGetProductLists_ProductList[];
}
