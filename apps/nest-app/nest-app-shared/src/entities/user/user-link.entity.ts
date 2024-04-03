//@ts-nocheck
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usersLinks' })
export class UserLink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: false })
  link: string;

  @Column({ nullable: true })
  is_used?: boolean;
}
