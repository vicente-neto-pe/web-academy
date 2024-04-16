/*
  Warnings:

  - You are about to alter the column `data_hora` on the `compra` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `compra` MODIFY `data_hora` DATETIME NOT NULL;
