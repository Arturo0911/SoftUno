import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";




@Entity()
export class Visitor extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    credential: string;

    @Column({nullable: false})
    fullName: string;


    @CreateDateColumn({select: false})
    createdAt: Date;

    @CreateDateColumn({select: false})
    modifiedAt: Date;

    @CreateDateColumn({select: false})
    deletedAt: Date;

    @Column({nullable: false})
    departmentVisitor: string;

    @Column({default:"ON COURSE"})
    status: string;


}
