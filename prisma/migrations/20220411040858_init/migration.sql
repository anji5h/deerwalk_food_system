/*
  Warnings:

  - You are about to alter the column `rate` on the `food` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- AlterTable
ALTER TABLE `food` MODIFY `rate` FLOAT NOT NULL,
    MODIFY `start_time` TIME NOT NULL,
    MODIFY `end_time` TIME NOT NULL;
