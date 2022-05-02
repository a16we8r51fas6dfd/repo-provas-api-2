import { prisma } from "../database.js";

async function findMany(discipline: string) {
  return prisma.teacherDiscipline.findMany({
    where: {
      discipline: {
        name: discipline,
      },
    },
    include: {
      teacher: true,
      discipline: true,
    },
  });
}

export default {
  findMany,
};
