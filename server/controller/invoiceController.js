
import User from "../models/userModel.js";

export async function getUserAuth(req, res, next) {
    const user = req.user

    res.status(200).json({
        status: "succes",
        user
    })
}

export async function createInvoiceController(req, res, next) {
    try {
        const { id } = req.params

        // const userToValidate = new User({ invoice: [req.body] });
        // await userToValidate.validate();

        const user = await User.findOneAndUpdate({ '_id': id }, { $push: { 'invoice': req.body } }, { new: true })

        res.status(200).json({
            status: "succes",
            user
        })

    } catch (error) {
        console.log(error.name);
        if(error.name==="ValidationError") return next("quantity and price must be greater than 0")

        const err = new Error("user not found")
        err.status = 400
        next(err)
    }
}

export async function updateInvoice(req, res, next) {
    try {
        const { idInvoice } = req.params

        if (!idInvoice) return next("the idInvoice is necessary")
    
        const user = req.user
    
        const invoice = user.invoice.id(idInvoice);
    
        if (!invoice) return next('invoice not found')
    
        Object.assign(invoice, req.body);

        await user.save();
    
        // const invoice = await User.findOneAndUpdate({ 'invoice._id': idInvoice }, { $set: { 'invoice.$': req.body } }, { new: true })
    
        res.status(200).json({
            status: "succes",
            invoice
        })
    } catch (error) {

        if(error.name==="ValidationError") return next("quantity and price must be greater than 0")

        next("user not found")
        
    }

}

export async function deleteInvoice(req, res, next) {
    const { id } = req.params
    console.log("borrando");
    const invoice = await User.findOne({ 'invoice._id': id })

    if (!invoice) return next('invoice not found')

    await User.updateOne({_id:req.user.id}, { $pull: { invoice: { _id: id } } })

    res.status(200).json({
        status: "succes"
    })
}


export async function getInvoice(req, res, next) {
    try {
        const { idInvoice } = req.params

        const invoice = await User.find({
            "invoice._id": idInvoice
        }, { "invoice.$": 1 })

        res.status(200).json({
            status: "succes",
            invoice
        })
    } catch (error) {
        return next("invoice not found")
    }
}

export async function getInvoices(req, res, next) {

    const invoices = req.user.invoice

    res.status(200).json({
        status: "succes",
        invoices
    })
}



export function totalItems(req, res, next) {
    console.log("hola");
    if (!req.body) return next('information needed to create an invoice')

    const { items } = req.body
    const total = items.reduce((acc, item) => (item.price * item.quantity) + acc, 0)

    req.body.total = total

    next()
}