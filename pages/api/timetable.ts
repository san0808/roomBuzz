import { Department, Year } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getTimetable } from "../../server/services/timetable.service";

export default async function timetableHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        const { year, department } = req.query;
        const timetable = await getTimetable(year as Year, department as Department);
        return res.status(200).send(timetable);
    }
}
