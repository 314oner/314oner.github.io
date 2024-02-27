import {
  JsonProperty,
  JsonSubTypes,
  JsonTypeInfo,
  JsonTypeInfoAs,
  JsonTypeInfoId,
} from 'jackson-js';
import { CreateCustomer } from './CreateCustomer';
import { ReinstateCustomer } from './ReinstateCustomer';
import { SuspendCustomer } from './SuspendCustomer';
import { UpdateCustomer } from './UpdateCustomer';

@JsonTypeInfo({
  use: JsonTypeInfoId.NAME,
  include: JsonTypeInfoAs.PROPERTY,
})
@JsonSubTypes({
  types: [
    { class: () => CreateCustomer, name: 'CreateCustomer' },
    { class: () => UpdateCustomer, name: 'UpdateCustomer' },
    { class: () => SuspendCustomer, name: 'SuspendCustomer' },
    { class: () => ReinstateCustomer, name: 'ReinstateCustomer' },
  ],
})
export abstract class CustomerPayload {
  @JsonProperty()
  id: string;
  constructor(id: any) {
    this.id = id;
  }
  public abstract getType(): void;
  getId() {
    return this.id;
  }
  baseToString() {
    return 'id=' + this.id;
  }
}
