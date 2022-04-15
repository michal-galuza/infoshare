type Primitives = string | number | boolean;
interface DomainPrimitive<T extends Primitives | Date> {
  value: T;
}

type ValueObjectProps<T> = T extends Primitives | Date ? DomainPrimitive<T> : T;

export abstract class ValueObject<T> {
  protected readonly props: ValueObjectProps<T>;

  constructor(props: ValueObjectProps<T>) {
    this.validate(props);
    this.props = props;
  }

  protected abstract validate(props: ValueObjectProps<T>): void;
}
