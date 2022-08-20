import { Router } from "express";
import { auth } from "../middleware/auth";
import walletController from "../controller/wallet-controller";
import { authAdmin } from "../middleware/checkAdmin";

export const walletRoute = Router();

walletRoute.use(auth);
walletRoute.get('', walletController.showAllWallet);
walletRoute.post('/:idUser', walletController.addWallet);
walletRoute.put('/:idUser/:id', walletController.updateWallet);
// walletRoute.get('', walletController.getWalletDetail);