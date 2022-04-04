import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    length: 50,
  })
  name: string;

  @Column({
    type: "int",
    nullable: false,
  })
  credit: number;

  @OneToMany(() => User, (item) => item.org)
  users: User[];

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;
}

