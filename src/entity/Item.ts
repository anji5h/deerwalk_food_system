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
  Check,
} from "typeorm";

import { ItemCategory } from "./ItemCategory";
import { ItemType } from "./ItemType";

@Entity()
@Check(`"rate" >= 0`)
@Check(`"s_time" < "e_time"`)
@Check(`"i_qty" >= 0`)
@Check(`"a_qty" >= 0`)
@Check(`"a_qty" <= "i_qty"`)
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({ nullable: false, default: "" })
  description: string;

  @Column({ nullable: false })
  image: string;

  @Column({ type:"time", nullable: false })
  s_time: number;

  @Column({ type: "time", nullable: false })
  e_time: number;

  @Column({ nullable: false, type: "float" })
  rate: number;

  @Column({ nullable: false })
  ini_qty: number;

  @Column({ nullable: false })
  avai_qty: number;

  @ManyToMany(() => ItemType, { cascade: true })
  @JoinTable()
  type: ItemType[];

  @ManyToOne(() => ItemCategory, (itemCategory) => itemCategory.items)
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
