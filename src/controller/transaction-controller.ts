// Quản lý giao dịch
import {Transaction} from '../model/transaction';
import moment from 'moment';

class TransactionController {
    getAllTransaction = async(req: any, res: any) => {
        try {
            let idUser = req.decoded.idUser
            let transactions = await Transaction.find({
                idUser: idUser
            });
            res.status(200).json(transactions);
        }catch {
            throw new Error('lỗi get transaction!')
        }
        
    };

    addTransaction = async(req: any, res: any) => {
        try {
            let time = moment().format('DD/MM/YYYY, h:mm');
            let transaction = req.body;
            transaction.time = time;
            await Transaction.create(transaction);
            res.status(200).json(transaction);
        }catch {
            throw new Error('lỗi thêm transaction!')

        }
        
    }

    delete = async (req: any, res: any) => {
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