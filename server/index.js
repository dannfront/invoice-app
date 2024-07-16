import app from './app.js'
import dotenv from 'dotenv'
import connectDb from './utils/conectionDb.js'
dotenv.config({path:"./config.env"})

connectDb(process.env.URL_DB)

app.listen(3000,'localhost',()=>console.log("servidor iniciado"))