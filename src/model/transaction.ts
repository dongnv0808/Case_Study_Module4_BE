import { model, Schema } from "mongoose";
import { ICategory } from "./category";
import { IWallet } from "./wallet";

interface ITransaction {
    categoryId: ICategory,
    walletId: IWallet,
    description: string,
    time: string
}

const transactionSchema = new Schema<ITransaction>({
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    walletId: {
        type: Schema.Types.ObjectId,
        ref: "wallet"
    },
    description: String,
    time: String
})

const Transaction = model<ITransaction>("transactions", transactionSchema);

export {Transaction};