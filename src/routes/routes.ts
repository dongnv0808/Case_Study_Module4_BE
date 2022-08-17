import { Router } from "express";
import {AuthRoute} from "./auth-route";

export const routes = Router();

routes.use('', AuthRoute);