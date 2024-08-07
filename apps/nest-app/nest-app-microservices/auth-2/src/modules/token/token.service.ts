/* eslint-disable no-underscore-dangle */
import { TokenEntity } from '@app/auth/entities/token.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TokenService {
  constructor(
    /*
    private readonly tokenRepository: TokenRepository,
   */
    private readonly jwtService: JwtService,
    @InjectRepository(TokenEntity) private tokenRepo: Repository<TokenEntity>,
  ) {}
  validateToken(jwt: string) {
    return this.jwtService.verify(jwt);
  }

  public async createToken(userId: string): Promise<any> {
    await this.deleteTokenForUserId(userId);
    const token = this.jwtService.sign(
      {
        userId,
      },
      {
        expiresIn: 30 * 24 * 60 * 60,
      },
    );

    return await this.tokenRepo.save({
      user_id: userId,
      token,
    });
  }

  public async deleteTokenForUserId(userId: string) {
    return await this.tokenRepo.delete({
      user_id: userId,
    });
  }

  public async decodeToken(token: string) {
    const tokenModel = await this.tokenRepo.findOne({
      where: { token },
    });
    let result = null;

    if (tokenModel) {
      try {
        const tokenData = this.jwtService.decode(tokenModel.token) as {
          exp: number;
          userId: any;
        };
        if (!tokenData || tokenData.exp <= Math.floor(+new Date() / 1000)) {
          result = null;
        } else {
          result = {
            userId: tokenData.userId,
          };
        }
      } catch (e) {
        result = null;
      }
    }
    return result;
  }
}
