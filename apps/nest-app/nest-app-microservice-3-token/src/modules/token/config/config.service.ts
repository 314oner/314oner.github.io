export class ConfigService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.TOKEN_SERVICE_PORT,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(key: string): any {
    return this.envConfig[key];
  }
}
