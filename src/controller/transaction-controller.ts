// Quản lý giao dịch
import {Transaction} from '../model/transaction';
import moment, { isDate } from 'moment';

class TransactionController {
    getAllTransactionByIdWallet = async(req: any, res: any) => {
        try {
            let idWallet = req.params.idWallet
            let transactions = await Transaction.find({
                walletId: idWallet
            });
            res.status(200).json(transactions);
        }catch {
            throw new Error('lỗi get transaction!')
        }
    };

    addTransaction = async(req: any, res: any) => {
        try {
            let transaction = req.body;
            new Date(transaction.time);
            console.log(transaction);
            
            await Transaction.create(transaction);
            res.status(200).json(transaction);
        }catch (err) {
            console.log(err);
            
            
        }
        
    }

    deleteTransaction = async (req: any, res: any) => {
        try {
            let id = req.params._id
            await Transaction.remove(id);
        res.status(200).json();
        }catch {
            throw new Error('lỗi xoá transaction!')
        }
    
    }
}

export default new TransactionController();