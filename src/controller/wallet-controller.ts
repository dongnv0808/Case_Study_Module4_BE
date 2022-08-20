import { Wallet } from "../model/wallet"
import { Request, Response, NextFunction} from "express"

class WalletController {
    showAllWallet = async(req: any, res: Response) => {
        try{
            let idUser = req.decoded.idUser
            let wallets = await Wallet.find({idUser: idUser});
            res.status(200).json(wallets)
        }catch(err){
            res.status(404).json(err)
        }
    }

    addWallet = async (req: any, res:Response, next: NextFunction) =>{
        try{
            let id = req.params.idUser
            let wallet = req.body;
            wallet.idUser = id
            let walletNew = await Wallet.create(wallet);
            res.status(201).json(walletNew);
        }catch(err){
            next(err);
        }
    };

    updateWallet = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        let idU = req.params.idUser;
        let wallet = Wallet.findById(id);
        if(!wallet){
            res.status(404).json;
        }else{
            let data = req.body;
            Wallet.findByIdAndUpdate({
                _id:id
            },data);
            data._id = id;
            res.status(200).json(data);   

        }
    }

    getWalletDetail =async (req: any, res: Response, next: NextFunction) => {
        let id = req.decoded.idUser;
        
    }
}

export default new WalletController();