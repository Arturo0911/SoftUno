import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import { User } from "./User.entity";
//import {Comment} from './comment.entity';


@Entity()
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;


    @Column({nullable: false})
    roleName: string;

    @Column({default: true})
    status: boolean;

    @CreateDateColumn({select: false, nullable: false})
    createdAt: Date;

    @CreateDateColumn({select: false, nullable: false})
    modifiedAt: Date;

    @CreateDateColumn({select: false, nullable: false})
    deletedAt: Date;

    @ManyToOne(() => User, user => user.roles)
    user: User;
}
