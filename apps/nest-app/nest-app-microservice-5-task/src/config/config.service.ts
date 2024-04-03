import { Transport } from '@nestjs/microservices';

export class ConfigService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.USER_SERVICE_PORT,
    };
    this.envConfig.baseUri = process.env.BASE_URI;
    this.envConfig.gatewayPort = process.env.API_GATEWAY_PORT;
    this.envConfig.paymentService = {
      options: {
        port: process.env.SERVICE_PAYMENT_PORT,
        host: process.env.SERVICE_PAYMENT_HOST,
      },
      transport: Transport.TCP,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(key: string): any {
    return this.envConfig[key];
  }
}