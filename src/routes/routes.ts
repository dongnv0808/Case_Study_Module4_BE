import { Router } from "express";
import {AuthRoute} from "./auth-route";
import { categoryRouter } from "./category-route";
import { userRouter } from "./user-route";

export const routes = Router();

routes.use('', AuthRoute);
routes.use('/users', userRouter);

routes.use('/categories',categoryRouter)
