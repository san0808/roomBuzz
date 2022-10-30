-- CreateEnum
CREATE TYPE "Day" AS ENUM ('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');

-- CreateEnum
CREATE TYPE "Year" AS ENUM ('FIRST', 'SECOND', 'THIRD', 'FOURTH');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('ALL', 'CSE', 'ECE', 'EEE', 'MCE', 'CVE', 'HSS', 'APS');

-- CreateTable
CREATE TABLE "rb_timetable" (
    "timetable_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" "Year" NOT NULL,
    "department" "Department" NOT NULL,

    CONSTRAINT "rb_timetable_pkey" PRIMARY KEY ("timetable_id")
);

-- CreateTable
CREATE TABLE "rb_lecture" (
    "lecture_id" SERIAL NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "faculty_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "day" "Day" NOT NULL,
    "start_time" TIME(0) NOT NULL,
    "end_time" TIME(0) NOT NULL,
    "classroom_id" INTEGER NOT NULL,
    "timetable_id" INTEGER,

    CONSTRAINT "rb_lecture_pkey" PRIMARY KEY ("lecture_id")
);

-- CreateTable
CREATE TABLE "rb_subject" (
    "subject_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "rb_subject_pkey" PRIMARY KEY ("subject_id")
);

-- CreateTable
CREATE TABLE "rb_faculty" (
    "faculty_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "rb_faculty_pkey" PRIMARY KEY ("faculty_id")
);

-- CreateTable
CREATE TABLE "rb_classroom" (
    "classroom_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "detail" TEXT,

    CONSTRAINT "rb_classroom_pkey" PRIMARY KEY ("classroom_id")
);

-- AddForeignKey
ALTER TABLE "rb_lecture" ADD CONSTRAINT "rb_lecture_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "rb_subject"("subject_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rb_lecture" ADD CONSTRAINT "rb_lecture_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "rb_faculty"("faculty_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rb_lecture" ADD CONSTRAINT "rb_lecture_classroom_id_fkey" FOREIGN KEY ("classroom_id") REFERENCES "rb_classroom"("classroom_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rb_lecture" ADD CONSTRAINT "rb_lecture_timetable_id_fkey" FOREIGN KEY ("timetable_id") REFERENCES "rb_timetable"("timetable_id") ON DELETE SET NULL ON UPDATE CASCADE;
