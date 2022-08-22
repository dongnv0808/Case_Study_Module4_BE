// Quản lý giao dịch
import {Transaction} from '../model/transaction';
import moment, { isDate } from 'moment';
import { model } from 'mongoose';

class TransactionController {
    getAllTransactionByIdWallet = async(req: any, res: any) => {
        try {
            let idWallet = req.params.idWallet
            let transactions = await Transaction.find({
                walletId: idWallet
            }).populate('categoryId', 'name');
            res.status(200).json(transactions);
        }catch (err) {
            console.log(err);
            // throw new Error('lỗi get transaction!')
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
        
    };

    deleteTransaction = async (req: any, res: any) => {        
        try {
            let id = req.params.idTransaction
            await Transaction.deleteOne({
                _id: id
            });
        console.log(123);
            res.status(200).json();
        }catch(err) {
            console.log(err);
            // throw new Error('lỗi xoá transaction!')
        }
    }
}
 
export default new TransactionController();