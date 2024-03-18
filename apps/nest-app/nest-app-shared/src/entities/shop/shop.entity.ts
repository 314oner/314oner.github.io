import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity({ name: 'shops' })
export class Shop {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    image: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    updated: Date

    @Column()
    created: Date

    @OneToOne(() => User)
    @JoinColumn()
    seller: User;
}