import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import { Role } from "./Role.entity";
import {Department} from './Department.entity';


@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;


    @Column({nullable: false, unique:true})
    credential: string;


    @Column({nullable: false})
    firstName: string;

    @Column({nullable: false})
    lastName: string;


    @Column({default: true})
    status: boolean;


    @Column({length:50,nullable: false, unique:true})
    email: string;

    
    @Column({ nullable: false})
    password: string;

    @CreateDateColumn({select: false, nullable: false})
    createdAt: Date;

    @CreateDateColumn({select: false, nullable: false})
    modifiedAt: Date;

    @CreateDateColumn({select: false, nullable: false})
    deletedAt: Date;

    @Column({type: "int"}) // <- Assuming that your primary key type is UUID (OR you can have "char")
    roleId: number;

    @Column({type: "int"}) // <- Assuming that your primary key type is UUID (OR you can have "char")
    departmentId: number;


    @ManyToOne(() => Role, role => role.users,{nullable: false,
        eager: true,
        cascade:['insert']})
    role: Role;


    @ManyToOne(() => Department, department => department.users,{nullable: false,
        eager: true,
        cascade:['insert']})
    department: Department;
}
