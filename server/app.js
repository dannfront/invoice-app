import express from 'express';
import routerInvoice from './routes/invoiceRoutes.js';
import routerAuth from './routes/authRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import {rateLimit} from 'express-rate-limit'

const app=express()

const limiter=rateLimit({
    windowMs:60*60*1000,
    limit:700,
    legacyHeaders:false
})

const corsOptions={
    origin:process.env.IS_PROD==="false"?process.env.URL_FRONTEND_LOCAL:process.env.URL_FRONTEND_PROD,
    credentials:true
}

app.use(express.json())
app.use(mongoSanitize())
app.use(cors(corsOptions))
app.use(helmet())
app.use(cookieParser())
app.use(limiter)

app.use('/api-invoice/v1',routerAuth)
app.use('/api-invoice/v1',routerInvoice)

app.use((err,req,res,next)=>{
    const statusCode=err.status||500
    
    res.status(statusCode).json({
        status:'failded',
        message:err.message||err
    })
})

export default app