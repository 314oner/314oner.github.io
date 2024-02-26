import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TokenService } from '../token/token.service';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class SecurityService {
  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) { }

  async registration(userDto: UserDto) {
    const candidate = await this.userService.getByEmail(userDto.email)
    if (candidate) {
      throw new HttpException(`User with email: ${userDto.email} already exists`, HttpStatus.BAD_REQUEST)
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({ ...userDto, password: hashedPassword })
    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.saveToken(user.id, tokens.refreshToken)

    return {
      ...tokens,
      user: { ...user, posts: [] }
    }
  }
  async refresh(refreshToken) {
    if (!refreshToken) {
      throw new HttpException('Token is not provided', HttpStatus.UNAUTHORIZED)
    }
    const userData = await this.tokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await this.tokenService.findToken(refreshToken)
    if (!userData || !tokenFromDb) {
      throw new HttpException('Token is invalid', HttpStatus.UNAUTHORIZED)
    }
    const user = await this.userService.getById(tokenFromDb.user.id)
    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.saveToken(user.id, tokens.refreshToken)

    return {
      ...tokens,
      user
    }
  }
}
