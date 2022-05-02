import { Test } from "@prisma/client";
import disciplineRepository from "../repositories/disciplineRepository.js";
import testRepository from "../repositories/testRepository.js";

interface Filter {
  groupBy: "disciplines" | "teachers";
}

export type CreateNewTest = Omit<Test, "id">;

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline();
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers();
  }
}

async function insertTest(createNewTest: CreateNewTest) {
  await testRepository.insert(createNewTest);
}

export default {
  find,
  insertTest,
};
