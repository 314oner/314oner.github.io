import { UserInterface } from '@app/users/modules/user/interfaces/user.interface';

export interface IServiceUserSearchResponse {
  status: number;
  message: string;
  user: UserInterface | null;
}
