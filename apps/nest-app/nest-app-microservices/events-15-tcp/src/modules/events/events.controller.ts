import { EventsService } from '@app/events/modules/events/events.service';
import { Controller } from '@nestjs/common';

@Controller()
export class EventsController {
  constructor(public service: EventsService) {}
  //please stand by
}
