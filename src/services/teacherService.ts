import teacherRepository from "../repositories/teacherRepository.js";

async function findMany(discipline: string) {
  return teacherRepository.findMany(discipline);
}

export default {
  findMany,
};
