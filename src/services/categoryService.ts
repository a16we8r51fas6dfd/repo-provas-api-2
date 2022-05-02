import categoryRepository from "../repositories/categoryRepository.js";

async function findMany() {
  return categoryRepository.findMany();
}

async function findByName(discipline: string) {
  return categoryRepository.findByName(discipline);
}

export default {
  findMany,
  findByName,
};
