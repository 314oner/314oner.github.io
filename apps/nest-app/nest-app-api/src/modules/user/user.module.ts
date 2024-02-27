import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../models/user.entity';
import { UserService } from './user.service';
import { FileService } from '../file/file.service';
import { FileModule } from '../file/file.module';

@Module({
  imports: [
    //TypeOrmModule.forFeature([User], 'database-MAIN'),
    TypeOrmModule.forFeature([User], 'database-FR'),
    //TypeOrmModule.forFeature([User], 'database-DE'),
    //TypeOrmModule.forFeature([User], 'database-GB'),
    FileModule,
  ],
  providers: [UserService, FileService],
  controllers: [],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
