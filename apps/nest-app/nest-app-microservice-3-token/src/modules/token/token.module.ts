import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { JwtConfigService } from './config/jwt-config.service';
import { MongoConfigService } from './config/mongo-config.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
    /*
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeature([
      {
        name: 'Token',
        schema: TokenSchema,
      },
    ]),
    */
  ],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule { }
