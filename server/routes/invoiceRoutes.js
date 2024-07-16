import express from 'express'
import { createInvoiceController, deleteInvoice, getInvoice, getInvoices, getUserAuth, totalItems, updateInvoice } from '../controller/invoiceController.js'
import { protectRoute } from '../controller/authController.js'

const routerInvoice=express.Router()


routerInvoice.post('/create/invoice/:id',protectRoute,totalItems,createInvoiceController)
routerInvoice.patch('/update/invoice/:idInvoice',protectRoute,updateInvoice)
routerInvoice.delete('/delete/invoice/:id',protectRoute,deleteInvoice)
routerInvoice.get('/get/invoice/:idInvoice',getInvoice)
routerInvoice.get('/get/invoices',protectRoute,getInvoices)
routerInvoice.get('/get/userAuth',protectRoute,getUserAuth)


export default routerInvoice