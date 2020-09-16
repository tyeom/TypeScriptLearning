import {BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany} from "typeorm";

import { Board } from './Board';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    no: number;

    @Column()
    id: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    level: number;

    @Column()
    etc: string;

    // User(1) <-> Board(*)
    @OneToMany(
        (type) => Board,
        (board) => board.user
        )
    boards!: Board[];
}