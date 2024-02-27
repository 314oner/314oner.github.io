import { CreateCustomer } from '../event/CreateCustomer';
import { CustomerPayload } from '../event/CustomerPayload';
import { nanoid } from 'nanoid';
import { UpdateCustomer } from '../event/UpdateCustomer';
import { SuspendCustomer } from '../event/SuspendCustomer';
import { ReinstateCustomer } from '../event/ReinstateCustomer';

const { Kafka } = require('kafkajs');

export class ProducerBusinessLogic {
  private sender: any;
  constructor(sender: any) {
    this.sender = sender;
  }
  generateRandomEvents() {
    var create = new CreateCustomer(nanoid(), 'Ivan', 'Ivanov');
    this.blockingSend(create);
    if (Math.random() > 0.5) {
      let update = new UpdateCustomer(create.getId(), 'Fedor', 'Fedorov');
      this.blockingSend(update);
    }
    if (Math.random() > 0.5) {
      let suspend = new SuspendCustomer(create.getId());
      this.blockingSend(suspend);
      if (Math.random() > 0.5) {
        let reinstate = new ReinstateCustomer(create.getId());
        this.blockingSend(reinstate);
      }
    }
  }
  blockingSend(payload: CustomerPayload) {
    console.log(payload);
    this.sender.blockigSend(payload);
  }
}
