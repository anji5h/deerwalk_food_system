import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { ItemCategory } from "./ItemCategory";
import { ItemType } from "./ItemType";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({ nullable: false })
  image: string;

  @Column({ type: "timestamp", nullable: false })
  s_time: Date;

  @Column({ type: "timestamp", nullable: false })
  e_time: Date;

  @Column({ nullable: false, type: "float" })
  rate: number;

  @Column({ nullable: false })
  i_qty: number;

  @Column({ nullable: false })
  a_qty: number;

  @ManyToMany(()=>ItemType)
  @JoinTable()
  type: ItemType[];

  @ManyToOne(() => ItemCategory, (itemCategory) => itemCategory.id)
  @JoinColumn()
  category: ItemCategory;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;
}
