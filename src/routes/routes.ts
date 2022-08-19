import { Router } from "express";
import {AuthRoute} from "./auth-route";
import { categoryRouter } from "./category-route";
import { userRoute } from "./user-route";
import { walletRoute } from "./wallet-route";

export const routes = Router();

routes.use('', AuthRoute);
routes.use('/categories',categoryRouter);
routes.use('/wallets', walletRoute);
routes.use('/users', userRoute);
