import { JsonProperty, JsonTypeName } from 'jackson-js';
import { CustomerPayload } from './CustomerPayload';

@JsonTypeName({ value: 'ReinstateCustomer' })
export class ReinstateCustomer extends CustomerPayload {
  TYPE: String = 'REINSTATE_CUSTOMER';
  //@ts-ignore
  @JsonProperty()
  private firstName: string;
  //@ts-ignore
  @JsonProperty()
  private lastName: string;
  constructor(@JsonProperty() id: string) {
    super(id);
  }
  public getType(): String {
    return this.TYPE;
  }
  public toString(): String {
    return (
      ' [' +
      super.baseToString() +
      ', firstName=' +
      this.firstName +
      ', lastName=' +
      this.lastName +
      ']'
    );
  }
}
