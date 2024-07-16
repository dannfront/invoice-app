import mongoose from "mongoose";
import itemsSchema from "./itemsModel.js";

export const invoiceSchema = new mongoose.Schema({
    createdAt: Date,
    paymentDue:Date,
    description: String,
    paymentTerms: Number,
    clientName: String,
    clientEmail: String,
    status: String,
    senderAddress: {
        street: String,
        city: String,
        postCode: String,
        country: String
    },
    clientAddress: {
        street: String,
        city: String,
        postCode: String,
        country: String
    },
    items: [itemsSchema],
    total: Number
})

