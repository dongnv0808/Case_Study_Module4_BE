import { Router } from "express";
import {AuthRoute} from "./auth-route";
import { categoryRouter } from "./category-route";

export const routes = Router();

routes.use('', AuthRoute);

routes.use('/categories',categoryRouter)
