export class ConfigService {
  private readonly envConfig: { [key: string]: unknown } = null;

  constructor() {
    this.envConfig = {
      port: process.env.MAILER_SERVICE_PORT,
      emailsDisabled: process.env.MAILER_DISABLED,
    };
  }

  get(key: string): unknown {
    return this.envConfig[key];
  }
}
