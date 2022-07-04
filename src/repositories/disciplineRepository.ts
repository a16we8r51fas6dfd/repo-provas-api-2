import { prisma } from '../database.js';

async function findMany() {
  return prisma.discipline.findMany();
}

async function findByName(discipline: string) {
  return prisma.discipline.findUnique({
    where: {
      name: discipline,
    },
  });
}

export default {
  findMany,
  findByName,
};
