import { UserInterface } from '@app/users/modules/user/interfaces/user.interface';

export interface IServiceUserCreateResponse {
  status: number;
  message: string;
  user: UserInterface;
  errors: { [key: string]: any };
}
