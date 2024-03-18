import { User } from "../user/user.entity";
export declare class Shop {
    id: number;
    image: string;
    description: string;
    updated: Date;
    created: Date;
    seller: User;
}
