import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, QueryRunner } from 'typeorm';
import { User } from '../../models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import { FileService } from '../file/file.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User, 'database-FR')
    private readonly usersRepository: Repository<User>,
    private fileService: FileService
  ) { }
  async createUser(userDto: UserDto | User): Promise<User> {
    return await this.usersRepository.save(userDto);
  }

  async getAllUsers() {
    return await this.usersRepository.find({
      relations: ['posts', 'comments'],
    });
  }

  async getById(userId: number) {
    return await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['posts'],
    });
  }

  async getByEmail(email: string) {
    return await this.usersRepository.findOne(
      {
        where: { email: email },
        relations: ['posts']
      }
    );
  }
}
