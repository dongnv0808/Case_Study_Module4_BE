import { model, Schema } from "mongoose";
import { ICategory } from "./category";
import { IWallet } from "./wallet";

interface ITransaction {
    categoryId: ICategory,
    walletId: IWallet,
    money: number,
    description: string,
    time: Date
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
    money: Number,
    description: String,
    time: Date
})

const Transaction = model<ITransaction>("transactions", transactionSchema);

export {Transaction};