import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import * as util from 'util';
import { KafkaMessage } from 'kafkajs';

function delay(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

interface Dragon {
  id: number;
  name: string;
}

type KillDragonMessage = Omit<KafkaMessage, 'value'> & {
  value: Pick<Dragon, 'id'>;
};
type PickDragonByIdMessage = Omit<KafkaMessage, 'value'> & {
  value: Pick<Dragon, 'id'>;
};

@Controller()
export class Api3Controller {
  constructor() {}
  private readonly logger = new Logger(Api3Controller.name);

  private readonly dragons = [
    { id: 1, name: 'Smaug' },
    { id: 2, name: 'Ancalagon The Black' },
    { id: 3, name: 'Glaurung' },
  ];
  //getDragonByID => hero.getById.dragon

  @MessagePattern('hero.kill.dragon')
  onKillDragon(@Payload() message: KillDragonMessage) {
    this.logger.log(`[hero.kill.dragon] message = ${util.inspect(message)}`);
    delay(10000);
    const dragonId = message?.value?.id ?? null;
    if (!dragonId) {
      this.logger.error('Failed Dragon ID');
      return;
    }

    const dragon = this.dragons.find(({ id }) => id === dragonId);
    if (!dragon) {
      this.logger.error('Failed fetch');
      return;
    }

    this.logger.log(`Hero killed ${dragon.name}!`);

    return dragon;
  }
  @MessagePattern('hero.pickById.dragon')
  onPickDragon(@Payload() message: PickDragonByIdMessage) {
    this.logger.log(`[hero.kill.dragon] message = ${util.inspect(message)}`);
    delay(10000);
    const dragonId = message?.value?.id ?? null;
    if (!dragonId) {
      this.logger.error('Failed Dragon ID');
      return;
    }

    const dragon = this.dragons.find(({ id }) => id === dragonId);
    if (!dragon) {
      this.logger.error('Failed fetch');
      return;
    }

    this.logger.log(`Hero find ${dragon.name}!`);

    return dragon;
  }
}
