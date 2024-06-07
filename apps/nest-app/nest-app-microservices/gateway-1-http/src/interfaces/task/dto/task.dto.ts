import { IsNotEmpty } from 'class-validator';

export class TaskCreateBodyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  start_time: string;

  @IsNotEmpty()
  duration: string;

  @IsNotEmpty()
  is_solved: string;

  @IsNotEmpty()
  notification_id: string;

  @IsNotEmpty()
  created_at: string;
}

export class TaskFindBodyDto {
  @IsNotEmpty()
  id: number;
}
