import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import { Role } from "./Role.entity";
import {Department} from './Department.entity';


@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;


    @Column({nullable: false})
    credential: string;


    @Column({nullable: false})
    firstName: string;

    @Column({nullable: false})
    lastName: string;


    @Column({default: true})
    status: boolean;


    @Column({length:50,nullable: false})
    email: string;

    
    @Column({nullable: false})
    password: string;

    @CreateDateColumn({select: false, nullable: false})
    createdAt: Date;

    @CreateDateColumn({select: false, nullable: false})
    modifiedAt: Date;

    @CreateDateColumn({select: false, nullable: false})
    deletedAt: Date;


    @OneToMany(() => Role, role => role.user)
    roles: Role[];

    @ManyToOne(() => Department, department => department.users)
    department: Department;
}
