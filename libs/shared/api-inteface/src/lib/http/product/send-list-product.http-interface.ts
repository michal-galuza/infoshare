export interface IHttpSendList_Product {
  name: string;
  location: string;
  unit: string | null;
  producer: string | null;
  image: File | null | string;
  description: string | null;
  count: number;
}

export interface IHttpSendList {
  data: IHttpSendList_Product[];
}
