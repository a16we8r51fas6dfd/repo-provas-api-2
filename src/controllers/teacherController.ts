import { Request, Response } from "express";
import teacherService from "../services/teacherService.js";

async function findMany(req: Request, res: Response) {
  const discipline = req.params.name;
  const teachers = await teacherService.findMany(discipline);
  res.send({ teachers });
}

export default {
  findMany,
};
