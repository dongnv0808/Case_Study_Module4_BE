import { Router } from "express";
import { walletRoute } from "./wallet-route";

export const routes = Router();

routes.use('/wallet', walletRoute);