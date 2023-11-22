/*
  Warnings:

  - Added the required column `title` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "prefix" VARCHAR(255),
ADD COLUMN     "title" VARCHAR(255) NOT NULL;
