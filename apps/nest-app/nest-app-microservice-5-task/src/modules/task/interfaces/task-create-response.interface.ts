import { ITask } from './task.interface';

export interface ITaskCreateResponse {
  status: number;
  message: string;
  task: ITask | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: { [key: string]: any } | null;
}
