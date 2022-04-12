/*
  Warnings:

  - You are about to alter the column `start_time` on the `food` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `end_time` on the `food` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - A unique constraint covering the columns `[name]` on the table `food` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `food` MODIFY `description` VARCHAR(1000) NULL,
    MODIFY `start_time` TIMESTAMP NOT NULL,
    MODIFY `end_time` TIMESTAMP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `food_name_key` ON `food`(`name`);
