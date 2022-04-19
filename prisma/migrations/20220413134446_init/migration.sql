/*
  Warnings:

  - You are about to alter the column `start_time` on the `food` table. The data in that column could be lost. The data in that column will be cast from `VarChar(5)` to `Time`.
  - You are about to alter the column `end_time` on the `food` table. The data in that column could be lost. The data in that column will be cast from `VarChar(5)` to `Time`.

*/
-- AlterTable
ALTER TABLE `food` MODIFY `start_time` TIME NOT NULL,
    MODIFY `end_time` TIME NOT NULL;
