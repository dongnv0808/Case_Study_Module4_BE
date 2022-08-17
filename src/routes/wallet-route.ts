import { Router } from "express";
import walletController from "../controller/wallet-controller";

export const walletRoute = Router();

walletRoute.get('', walletController.showAllWallet);