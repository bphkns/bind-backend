import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    @Index({ unique: true })
    username: string;

    @Column({ nullable: false })
    @Index({ unique: true })
    phone: string;

    @Column({ nullable: false })
    password: string;

    @Column({ default: null ,unique:true})
    email: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}