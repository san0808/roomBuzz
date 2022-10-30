/*
  Warnings:

  - A unique constraint covering the columns `[year,department]` on the table `rb_timetable` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `start_time` on the `rb_lecture` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `end_time` on the `rb_lecture` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "rb_lecture" DROP COLUMN "start_time",
ADD COLUMN     "start_time" TIME(1) NOT NULL,
DROP COLUMN "end_time",
ADD COLUMN     "end_time" TIME(1) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "rb_timetable_year_department_key" ON "rb_timetable"("year", "department");
