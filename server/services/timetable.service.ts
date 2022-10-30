import { Department, Year } from "@prisma/client";
import prisma from "../utils/prisma";

export const getTimetable = (year: Year, department: Department) => {
    return prisma.timetable.findUnique({
        where: {
            year_department: {
                year,
                department,
            },
        },
        include: {
            lectures: {
                include: {
                    subject: true,
                    faculty: true,
                    classroom: true,
                },
            },
        },
    });
};
