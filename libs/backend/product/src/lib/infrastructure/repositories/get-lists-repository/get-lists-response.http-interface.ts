export interface IHttpGetListsResponse_Product {
  id: string;
  name: string;
  location: string;
  unit: string | null;
  producer: string | null;
  image: null | string;
  description: string | null;
  count: number;
}

export interface IHttpGetListsResponse_ProductList {
  products: IHttpGetListsResponse_Product[];
  id: string;
  createdAt: string;
}

export interface IHttpGetListsResponse {
  data: IHttpGetListsResponse_ProductList[];
}
