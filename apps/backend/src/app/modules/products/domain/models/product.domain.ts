import { DomainBase } from '@app/shared/backend/common/domain';

export class Product extends DomainBase<{ values: string }, string> {
  constructor() {
    super({ id: 'XD', props: { values: 'XDDD' } });
  }
}
