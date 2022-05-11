export class ProductReadModel {
  public readonly id: string;
  public readonly name: string;
  public readonly location: string;
  public readonly unit: string | null;
  public readonly producer: string | null;
  public readonly image: null | string;
  public readonly description: string | null;
  public readonly count: number;

  constructor(data: ProductReadModel) {
    this.id = data.id;
    this.name = data.name;
    this.location = data.location;
    this.unit = data.unit;
    this.producer = data.producer;
    this.image = data.image;
    this.description = data.description;
    this.count = data.count;
  }
}
