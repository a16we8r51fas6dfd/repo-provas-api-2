import disciplineRepository from "../repositories/disciplineRepository.js";

async function findMany() {
  return disciplineRepository.findMany();
}

async function findByName(discipline: string) {
  return disciplineRepository.findByName(discipline);
}

export default {
  findMany,
  findByName,
};
