import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Organization } from "./Organization";

enum ROLE {
  SUPER_ADMIN = "super_admin",
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

  @ManyToOne(() => Organization, (organization) => organization.users, { cascade: true })
  @JoinColumn({ name: "org_id" })
  org: Organization;

  @Column({ type: "int", nullable: true })
  org_id: number;

  @Column({ type: "enum", enum: ROLE, default: ROLE.USER })
  role: ROLE;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;
}
