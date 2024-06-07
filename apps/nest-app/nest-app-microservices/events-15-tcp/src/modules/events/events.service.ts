/* eslint-disable no-underscore-dangle */
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PAYMENTS_SERVICE_TOKEN } from '@shared/common/tokens';

@Injectable()
export class EventsService {
  constructor(
    @Inject(PAYMENTS_SERVICE_TOKEN) private readonly client: ClientProxy,
  ) {}
  //please stand by
}
