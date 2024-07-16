import app from './app.js'
import dotenv from 'dotenv'
import connectDb from './utils/conectionDb.js'
dotenv.config()

connectDb(process.env.URL_DB)

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));