import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

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
    length:50
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
