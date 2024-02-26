import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Api5Controller } from './api5.controller';
import { Api5Service } from './api5.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'API_2',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2998,
        },
      },
      /*
      //TODO:pods for kafka... stand by...
      {
        name: "API_3",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 2997
        }
      },
      */
      {
        name: 'API_4',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2996,
        },
      },
    ]),
  ],
  controllers: [Api5Controller],
  providers: [Api5Service],
})
export class Api5Module {}
