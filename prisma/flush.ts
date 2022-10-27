import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.lecture.deleteMany({});
    await prisma.subject.deleteMany({});
    await prisma.classroom.deleteMany({});
    await prisma.faculty.deleteMany({});
    await prisma.timetable.deleteMany({});
}
main()
    .then(async () => {
        console.log("Cleared Database");
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
