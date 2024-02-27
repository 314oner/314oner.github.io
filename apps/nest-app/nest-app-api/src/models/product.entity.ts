import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "./shop.entity";

@Entity({ name: 'products' })
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    image: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    updated: Date

    @Column()
    created: Date

    @OneToOne(() => Shop)
    @JoinColumn()
    shop: Shop;

}