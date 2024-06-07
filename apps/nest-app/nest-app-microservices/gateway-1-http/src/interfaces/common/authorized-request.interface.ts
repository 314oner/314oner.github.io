import { UserInterface } from '@app/users/modules/user/interfaces/user.interface';

export interface IAuthorizedRequest extends Request {
  user?: UserInterface;
}
