import {BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn} from "typeorm";

import { User } from './User';

@Entity()
export class Board extends BaseEntity {

    @PrimaryGeneratedColumn()
    no: number;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    contents: string;

    @Column()
    recordDate: Date;

    @Column()
    level: number;

    @Column()
    etc: string;

    // Board(*) <-> User(1)
    @ManyToOne(
        (type) => User,
        (user) => user.id
    )

    @JoinColumn({
        name: 'user_id'
    })
    user: User;
}