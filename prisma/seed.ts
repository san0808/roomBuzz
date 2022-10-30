import { PrismaClient, Year, Department, Day } from "@prisma/client";
import set from "date-fns/set";

const prisma = new PrismaClient();

import timetablesJson from "../data/json/timetables.json";
import subjectsJson from "../data/json/subjects.json";
import classroomJson from "../data/json/classroom.json";
import facultyJson from "../data/json/faculty.json";
import lecturesJson from "../data/json/lectures.json";

async function main() {
    await prisma.lecture.deleteMany({});

    await prisma.subject.deleteMany({});
    await prisma.subject.createMany({
        data: subjectsJson,
    });
    const subjects = await prisma.subject.findMany({});
    console.log(subjects);

    await prisma.classroom.deleteMany({});
    await prisma.classroom.createMany({
        data: classroomJson,
    });
    const classrooms = await prisma.classroom.findMany({});
    console.log(classrooms);

    await prisma.faculty.deleteMany({});
    await prisma.faculty.createMany({
        data: facultyJson,
    });
    const faculty = await prisma.faculty.findMany({});
    console.log(faculty);

    await prisma.timetable.deleteMany({});

    await prisma.timetable.createMany({
        data: timetablesJson.map(
            ({ ref_id, ...timetable }) =>
                timetable as { name: string; year: Year; department: Department }
        ),
    });

    const timetables = await prisma.timetable.findMany({});

    await prisma.lecture.createMany({
        data: lecturesJson.map(
            ({
                ref_id,
                subject,
                classroom,
                faculty: _faculty,
                year,
                department,
                startTime,
                endTime,
                ...lecture
            }) => {
                const s: number[] = startTime.split(":").map((item) => Number(item));
                const e = endTime.split(":").map((item) => Number(item));

                let start = set(new Date(), {
                    hours: s[0],
                    minutes: s[1],
                    seconds: s[2],
                });
                let end = set(new Date(), {
                    hours: e[0],
                    minutes: e[1],
                    seconds: e[2],
                });
                const now = new Date();
                const localOffset = now.getTimezoneOffset() * 60000;
                const utc_start = start.getTime() + localOffset;
                const utc_end = end.getTime() + localOffset;
                const offset = 5.5;
                start = new Date(utc_start + 3600000 * offset);
                end = new Date(utc_end + 3600000 * offset);
                console.log(start, end);

                return {
                    ...lecture,
                    startTime: start,
                    endTime: end,
                    subjectId: subjects.filter((sub) => sub.code == subject)[0].id,
                    classroomId: classrooms.filter((room) => room.code === classroom)[0].id,
                    facultyId: faculty.filter((item) => item.code == _faculty)[0].id,
                    timetableId: timetables.filter(
                        (item) => item.year == year && item.department == department
                    )[0].id,
                } as {
                    subjectId: number;
                    facultyId: number;
                    description: string;
                    day: Day;
                    startTime: Date | string;
                    endTime: Date | string;
                    classroomId: number;
                    timetableId?: number | null;
                };
            }
        ),
    });

    // const timetablesList = timetablesJson.map(({ ref_id, ...timetable }) => {
    //     let lectures = lecturesJson.filter((lecture) => lecture.ref_id == ref_id);

    //     lectures = lectures.map((lecture) => {
    //         // @ts-ignore
    //         lecture.subject = subjects.filter((sub) => sub.code == lecture.subject)[0].id;
    //         // @ts-ignore
    //         lecture.classroom = classrooms.filter(
    //             (classroom) => classroom.code == lecture.classroom
    //         )[0].id;
    //         // @ts-ignore
    //         lecture.faculty = faculty.filter((item) => item.code == lecture.faculty)[0].id;
    //         return {
    //             ...lecture,
    //         };
    //     });
    //     // @ts-ignore
    //     lectures = lectures.map((ref_id, ...lecture) => ({ ...lecture }));

    //     return {
    //         ...timetable,
    //         lectures,
    //     };
    // });

    // const alice = await prisma.user.upsert({
    //     where: { email: "alice@prisma.io" },
    //     update: {},
    //     create: {
    //         email: "alice@prisma.io",
    //         name: "Alice",
    //         posts: {
    //             create: {
    //                 title: "Check out Prisma with Next.js",
    //                 content: "https://www.prisma.io/nextjs",
    //                 published: true,
    //             },
    //         },
    //     },
    // });
    // const bob = await prisma.user.upsert({
    //     where: { email: "bob@prisma.io" },
    //     update: {},
    //     create: {
    //         email: "bob@prisma.io",
    //         name: "Bob",
    //         posts: {
    //             create: [
    //                 {
    //                     title: "Follow Prisma on Twitter",
    //                     content: "https://twitter.com/prisma",
    //                     published: true,
    //                 },
    //                 {
    //                     title: "Follow Nexus on Twitter",
    //                     content: "https://twitter.com/nexusgql",
    //                     published: true,
    //                 },
    //             ],
    //         },
    //     },
    // });
    // console.log({ alice, bob });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
