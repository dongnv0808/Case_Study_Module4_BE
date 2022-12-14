import { Router } from "express";
import { auth } from "../middleware/auth";
import categoryController from "../controller/category-controller";
export const categoryRouter = Router();

categoryRouter.use(auth);
categoryRouter.get('',categoryController.getAll);
categoryRouter.post('',categoryController.addCategory);
categoryRouter.get('/:id',categoryController.getCategory);
categoryRouter.put('/:id',categoryController.updateCategory);
categoryRouter.delete('/:id',categoryController.deleteCategory);
