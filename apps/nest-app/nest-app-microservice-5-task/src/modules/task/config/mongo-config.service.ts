export class MongoConfigService {
  createMongooseOptions(): any {
    return {
      uri: process.env.MONGO_DSN,
    };
  }
}
