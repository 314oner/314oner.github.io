import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AUTH_SERVICE_TOKEN, USERS_SERVICE_TOKEN } from '@shared/common/tokens';

import { ClientProxy } from '@nestjs/microservices/client/client-proxy';
import { firstValueFrom } from 'rxjs';
import { Authorization } from './decorators/authorization.decorator';
import { IAuthorizedRequest } from './interfaces/common/authorized-request.interface';
import { CreateGoogleUserDto } from './interfaces/user/dto/create-google-user.dto';
import { CreateUserResponseDto } from './interfaces/user/dto/create-user-response.dto';
import { CreateUserDto } from './interfaces/user/dto/create-user.dto';
import { GetUserByTokenResponseDto } from './interfaces/user/dto/get-user-by-token-response.dto';
import { LoginUserResponseDto } from './interfaces/user/dto/login-user-response.dto';
import { LoginUserDto } from './interfaces/user/dto/login-user.dto';
import { IServiveTokenCreateResponse } from './interfaces/user/service-token-create-response.interface';
import { IServiceUserCreateResponse } from './interfaces/user/service-user-create-response.interface';
import { IServiceUsergeGetAllUsersResponse } from './interfaces/user/service-user-get-all-users-response.interface';
import { IServiceUserGetByIdResponse } from './interfaces/user/service-user-get-by-id-response.interface';
import { IServiceUserGoogleCreateResponse } from './interfaces/user/service-user-google-create-response.interface';
import { IServiceUserSearchResponse } from './interfaces/user/service-user-search-response.interface';

@ApiBearerAuth('authorization')
@ApiTags('users')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(
    @Inject(USERS_SERVICE_TOKEN)
    private readonly userServiceClient: ClientProxy,
    @Inject(AUTH_SERVICE_TOKEN)
    private readonly tokenServiceClient: ClientProxy,
  ) {}

  @Post('/sign-up')
  @ApiCreatedResponse({
    type: CreateUserResponseDto,
  })
  public async createUser(
    @Body() userRequest: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    const createUserResponse: IServiceUserCreateResponse = await firstValueFrom(
      this.userServiceClient.send('user_create', userRequest),
    );
    if (createUserResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createUserResponse.message,
          data: null,
          errors: createUserResponse.errors,
        },
        createUserResponse.status,
      );
    }
    return {
      message: createUserResponse.message,
      data: {
        user: createUserResponse.user,
        token: '',
      },
      //@ts-ignore
      errors: null,
    };
  }

  @Get()
  @Authorization(true)
  @ApiOkResponse({
    type: GetUserByTokenResponseDto,
  })
  public async getUserByToken(
    @Req() request: IAuthorizedRequest,
  ): Promise<GetUserByTokenResponseDto> {
    const userInfo = request.user;

    const userResponse: IServiceUserGetByIdResponse = await firstValueFrom(
      //@ts-ignore
      this.userServiceClient.send('user_get_by_id', userInfo.id),
    );

    return {
      message: userResponse.message,
      data: {
        user: userResponse.user,
      },
      //@ts-ignore
      errors: null,
    };
  }
  //@Authorization(true)
  @Get('/all')
  public async getAllUsers(): Promise<any> {
    const usersResponse: IServiceUsergeGetAllUsersResponse =
      await firstValueFrom(
        this.userServiceClient.send('user_get_all_users', {}),
      );

    return {
      message: usersResponse.message,
      data: {
        users: usersResponse.users,
      },
      errors: null,
    };
  }

  @Post('/sign-in')
  @ApiCreatedResponse({
    type: LoginUserResponseDto,
  })
  public async loginUser(
    @Body() loginRequest: LoginUserDto,
  ): Promise<LoginUserResponseDto> {
    const getUserResponse: IServiceUserSearchResponse = await firstValueFrom(
      this.userServiceClient.send('user_search_by_credentials', loginRequest),
    );
    if (getUserResponse.status !== HttpStatus.OK) {
      throw new HttpException(
        {
          message: getUserResponse.message,
          data: null,
          errors: null,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const createTokenResponse: IServiveTokenCreateResponse =
      await firstValueFrom(
        this.tokenServiceClient.send('token_create', {
          //@ts-ignore
          userId: getUserResponse.user.id,
        }),
      );

    return {
      message: createTokenResponse.message,
      data: {
        token: createTokenResponse.token,
        user: getUserResponse.user,
      },
      //@ts-ignore
      errors: null,
    };
  }
  @Post('/auth/google')
  public async createGoogleUser(
    @Body() userRequest: CreateGoogleUserDto,
  ): Promise<any> {
    const createUserResponse: IServiceUserGoogleCreateResponse =
      await firstValueFrom(
        this.userServiceClient.send('user_google_create', userRequest),
      );
    const createTokenResponse: IServiveTokenCreateResponse =
      await firstValueFrom(
        this.tokenServiceClient.send('token_create', {
          userId: createUserResponse.user.id,
        }),
      );
    return {
      message: createUserResponse.message,
      data: {
        user: createUserResponse.user,
        token: createTokenResponse.token,
      },
      errors: null,
    };
  }
}
