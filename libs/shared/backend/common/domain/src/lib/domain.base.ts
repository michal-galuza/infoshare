interface CreateEntityProps<TProps, TId> {
  id: TId;
  props: TProps;
}

export abstract class DomainBase<TProps, TId> {
  protected readonly props: TProps;

  protected readonly _id: TId;

  constructor({ id, props }: CreateEntityProps<TProps, TId>) {
    this._id = id;
    this.props = props;
  }

  public get id(): TId | undefined {
    return this._id;
  }
}
