import { UserInterface } from '@app/users/modules/user/interfaces/user.interface';

export interface IServiceUsergeGetAllUsersResponse {
  status: number;
  message: string;
  users: UserInterface[] | null;
}
