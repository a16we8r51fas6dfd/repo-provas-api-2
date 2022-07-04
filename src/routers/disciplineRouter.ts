import { Router } from 'express';
import disciplineContoller from '../controllers/disciplineContoller.js';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware.js';

const disciplineRouter = Router();

disciplineRouter.get('/disciplines', ensureAuthenticatedMiddleware, disciplineContoller.findMany);

export default disciplineRouter;
