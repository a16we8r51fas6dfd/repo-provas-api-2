import { Request, Response } from "express";
import categoryService from "../services/categoryService.js";
import disciplineService from "../services/disciplineService.js";
import teacherService from "../services/teacherService.js";
import testService from "../services/testService.js";

async function find(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy });
  res.send({ tests });
}

async function newTest(req: Request, res: Response) {
  const newTest = req.body;

  const disciplineId = await disciplineService.findByName(newTest.discipline);
  const categoryId = await categoryService.findByName(newTest.category);
  const teacherId = await teacherService.findByName(newTest.teacher);
  const teacherDisciplineId = await teacherService.findTeacherDisciplineId(
    teacherId.id,
    disciplineId.id
  );

  const formatedNewTest = {
    name: newTest.name,
    pdfUrl: newTest.pdfUrl,
    categoryId: categoryId.id,
    teacherDisciplineId: teacherDisciplineId.id,
    views: 0,
  };

  await testService.insertTest(formatedNewTest);
  res.sendStatus(201);
}

async function updateViews(req: Request, res: Response) {
  const testId = parseInt(req.body.id);
  await testService.updateViews(testId);

  res.sendStatus(200);
}

export default {
  find,
  newTest,
  updateViews,
};
