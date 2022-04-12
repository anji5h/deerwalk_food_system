/*
  Warnings:

  - You are about to alter the column `start_time` on the `food` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `end_time` on the `food` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `food` MODIFY `start_time` TIMESTAMP NOT NULL,
    MODIFY `end_time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `status` ENUM('PENDING', 'DELIVERED', 'CANCELLED') NOT NULL DEFAULT 'PENDING';
