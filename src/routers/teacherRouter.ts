import { Router } from 'express';
import instructorController from '../controllers/teacherController.js';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware.js';

const teacherRouter = Router();

teacherRouter.get('/teachers/:discipline', ensureAuthenticatedMiddleware, instructorController.findMany);

export default teacherRouter;
