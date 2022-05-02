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

async function findByName(teacher: string) {
  return prisma.teacher.findUnique({
    where: {
      name: teacher,
    },
  });
}

async function findTeacherDiscipline(teacherId: number, disciplineId: number) {
  return prisma.teacherDiscipline.findFirst({
    where: {
      disciplineId: disciplineId,
      teacherId: teacherId,
    },
  });
}

export default {
  findMany,
  findByName,
  findTeacherDiscipline,
};
