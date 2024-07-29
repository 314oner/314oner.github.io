/* eslint-disable no-underscore-dangle */
import { UserEntity } from '@app/users/entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { AUTH_SERVICE_TOKEN } from '@shared/common/tokens';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    //private readonly usersRepository: UserRepository,
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    @Inject(AUTH_SERVICE_TOKEN) private readonly client: ClientProxy,
  ) {}
  public async searchUserByEmail(params: {
    email: string;
  }): Promise<UserEntity | unknown> {
    const email = params.email;
    return await this.userRepo.findOne({ where: { email } });
  }

  public async searchUserById(id: string): Promise<UserEntity | unknown> {
    return await this.userRepo.findOne({ where: { id } });
  }

  public async updateUserById(
    id: string,
    userParams: {
      is_confirmed: boolean;
      profile_picture: string;
      isAdmin: boolean;
    },
  ): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id } });
    return await this.userRepo.save({
      //@ts-ignore
      id: user.id,
      ...userParams,
    });
  }
  async comparePassword(enteredPassword: string, dbPassword: any) {
    return enteredPassword === dbPassword;
  }
  hashData(token: string) {
    return token;
  }

  public async createUser(user: UserEntity): Promise<UserEntity> {
    return await this.userRepo.save({
      ...user,
      password: this.hashData(user.password),
    });
  }

  public async createGoogleUser(user: any): Promise<any> {
    const generatedPassword =
      Math.random().toString(36).slice(-8) +
      Math.random().toString(36).slice(-8);
    return await this.userRepo.save({
      ...user,
      profile_picture: user?.googlePhotoUrl,
      isAdmin: true,
      password: this.hashData(generatedPassword),
    });
  }
}
