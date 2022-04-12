/*
  Warnings:

  - You are about to alter the column `start_time` on the `food` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `end_time` on the `food` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- DropForeignKey
ALTER TABLE `food` DROP FOREIGN KEY `Food_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `food_food_type` DROP FOREIGN KEY `Food_Food_Type_food_id_fkey`;

-- DropForeignKey
ALTER TABLE `food_food_type` DROP FOREIGN KEY `Food_Food_Type_type_id_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_food_id_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_org_id_fkey`;

-- AlterTable
ALTER TABLE `food` MODIFY `start_time` TIMESTAMP NOT NULL,
    MODIFY `end_time` TIMESTAMP NOT NULL;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food` ADD CONSTRAINT `food_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `food_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_food_type` ADD CONSTRAINT `food_food_type_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `food`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_food_type` ADD CONSTRAINT `food_food_type_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `food_type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `food_category` RENAME INDEX `Food_Category_name_key` TO `food_category_name_key`;

-- RenameIndex
ALTER TABLE `food_type` RENAME INDEX `Food_Type_name_key` TO `food_type_name_key`;

-- RenameIndex
ALTER TABLE `organization` RENAME INDEX `Organization_name_key` TO `organization_name_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_email_key` TO `user_email_key`;
