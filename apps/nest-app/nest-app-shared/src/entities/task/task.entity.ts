import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tasks' })
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    user_id: string;

    @Column()
    start_time: number;

    @Column()
    duration: string;

    @Column()
    is_solved: boolean;

    @Column()
    notification_id: number;

    @Column()
    created_at: string;

}