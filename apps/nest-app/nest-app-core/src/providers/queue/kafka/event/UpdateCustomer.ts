import { JsonProperty, JsonTypeName } from 'jackson-js';
import { CustomerPayload } from './CustomerPayload';

@JsonTypeName({ value: 'UpdateCustomer' })
export class UpdateCustomer extends CustomerPayload {
  TYPE: String = 'UPDATE_CUSTOMER';
  //@ts-ignore
  @JsonProperty()
  private firstName: string;
  //@ts-ignore
  @JsonProperty()
  private lastName: string;
  constructor(
    @JsonProperty() id: string,
    @JsonProperty() firstName: string,
    @JsonProperty() lastName: string,
  ) {
    super(id);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  public getType(): String {
    return this.TYPE;
  }
  getFirstName(): String {
    return this.firstName;
  }
  getLastName(): String {
    return this.firstName;
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
