import { Entity } from "typeorm";
import { ItemCategory } from "./ItemCategory";

@Entity()
export class ItemType extends ItemCategory {}
