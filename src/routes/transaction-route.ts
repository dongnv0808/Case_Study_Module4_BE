import Router from 'express';
import transactionController from '../controller/transaction-controller';
import {auth} from '../middleware/auth';


export const transactionRouter = Router();

transactionRouter.use(auth);
transactionRouter.post('', transactionController.addTransaction);