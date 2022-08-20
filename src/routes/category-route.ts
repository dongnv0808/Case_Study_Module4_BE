import { Router } from "express";
import categoryController from "../controller/category-controller";
import {auth} from '../middleware/auth';

export const categoryRouter = Router();

categoryRouter.use(auth);
categoryRouter.get('',categoryController.getAll);
categoryRouter.post('/:idUser',categoryController.addCategory);
categoryRouter.delete('/:id',categoryController.deleteCategory);


