import { Wallet } from "../model/wallet"
import { Request, Response} from "express"
import { UploadedFile } from "express-fileupload";

class WalletController {
    showAllWallet = async(req: Request, res: Response) => {
        try{
            let wallets = Wallet.find();
            res.status(200).json(wallets)
        }catch(err){
            res.status(404).json()
        }
    }

    addWallet = async(req: Request, res: Response) => {
        
    }
}

export default new WalletController();