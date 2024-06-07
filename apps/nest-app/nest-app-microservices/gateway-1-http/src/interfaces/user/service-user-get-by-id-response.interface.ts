import { UserInterface } from '@app/users/modules/user/interfaces/user.interface';

export interface IServiceUserGetByIdResponse {
  status: number;
  message: string;
  user: UserInterface | null;
}
