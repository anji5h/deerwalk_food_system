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

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: "default.png" })
  image: string;

  @Column({ type: "time" })
  s_time: number;

  @Column({ type: "time" })
  e_time: number;

  @Column({ type: "float" })
  rate: number;

  @Column()
  ini_qty: number;

  @Column()
  avai_qty: number;

  @Column({ default: true })
  available: boolean;

  @ManyToMany(() => ItemType, { cascade: true })
  @JoinTable({
    name: "item_type_item",
    joinColumn: {
      name: "item_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "type_id",
      referencedColumnName: "id",
    },
  })
  type: ItemType[];

  @ManyToOne(() => ItemCategory, (itemCategory) => itemCategory.items, {
    cascade: true,
  })
  @JoinColumn({ name: "category_id" })
  category: ItemCategory;

  @Column()
  category_id: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;
}
