import { faker } from '@faker-js/faker';
import { disciplines } from './consts/disciplines.js';
import { prisma } from '../src/database.js';

async function main() {
  for (let i = 1; i < 9; i++) {
    await prisma.term.upsert({
      where: { id: i },
      update: {},
      create: {
        id: i,
        number: i,
      },
    });
  }

  for (let i = 1; i < 7; i++) {
    await prisma.category.upsert({
      where: { id: i },
      update: {},
      create: {
        id: i,
        name: `P${i}`,
      },
    });
  }

  for (let i = 0; i < disciplines.length; i++) {
    const discipline = await prisma.discipline.create({
      data: disciplines[i],
    });
  }

  for (let i = 1; i < 17; i++) {
    await prisma.teacher.upsert({
      where: { id: i },
      update: {},
      create: {
        id: i,
        name: faker.name.findName(),
      },
    });
  }

  for (let i = 1; i < 9; i++) {
    await prisma.teacherDiscipline.upsert({
      where: { id: i },
      update: {},
      create: {
        id: i,
        teacherId: i,
        disciplineId: i,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
