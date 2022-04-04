import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ItemCategory } from "./ItemCategory";
import { ItemType } from "./ItemType";

@Entity()
@Check(`"rate" >= 0`)
@Check(`"s_time" < "e_time"`)
@Check(`"ini_qty" >= 0`)
@Check(`"avai_qty" >= 0`)
@Check(`"avai_qty" <= "ini_qty"`)
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

  @Column({ nullable: false, default: "default.png" })
  image: string;

  @Column({ type: "time", nullable: false })
  s_time: number;

  @Column({ type: "time", nullable: false })
  e_time: number;

  @Column({ nullable: false, type: "float" })
  rate: number;

  @Column({ nullable: false })
  ini_qty: number;

  @Column({ nullable: false })
  avai_qty: number;

  @Column({ nullable: false, default: false })
  available: boolean;

  @ManyToMany(() => ItemType, { cascade: true, nullable: false })
  @JoinTable({ name: "item_type_item" })
  type: ItemType[];

  @ManyToOne(() => ItemCategory, (itemCategory) => itemCategory.items, {
    cascade: true,
    nullable: false,
  })
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
