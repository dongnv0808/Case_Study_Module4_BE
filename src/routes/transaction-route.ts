import Router from 'express';
import transactionController from '../controller/transaction-controller';

export const transactionRouter = Router();

transactionRouter.post('', transactionController.addTransaction);