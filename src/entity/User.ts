import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Organization } from "./Organization";

enum Role {
  ADMIN = "admin",
  USER = "user",
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    length: 50,
  })
  name: string;

  @Column({
    unique: true,
    type: "varchar",
  })
  email: string;

  @Column({
    type: "text",
    nullable: false,
  })
  password: string;

  @ManyToOne(() => Organization, (organization) => organization.users, { nullable: true })
  org: Organization;

  @Column({ type: "enum", enum: Role, default: Role.USER })
  role: Role;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;
}
