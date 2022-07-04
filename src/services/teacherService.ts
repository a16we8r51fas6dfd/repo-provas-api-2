import teacherRepository from '../repositories/teacherRepository.js';

async function findMany(discipline: string) {
  return teacherRepository.findMany(discipline);
}

async function findByName(teacher: string) {
  return teacherRepository.findByName(teacher);
}

async function findTeacherDisciplineId(teacherId: number, disciplineId: number) {
  return teacherRepository.findTeacherDiscipline(teacherId, disciplineId);
}

export default {
  findMany,
  findByName,
  findTeacherDisciplineId,
};
