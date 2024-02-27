import { Module } from '@nestjs/common';
import { ROOT_ROLE_ID } from '../../admin/admin.constants';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [ROOT_ROLE_ID],
})
export class SystemModule { }
