import express from 'express'
import { loginController, registerController,isVerifed,protectRoute } from '../controller/authController.js'

const routerAuth=express.Router()


routerAuth.post('/login',loginController)
routerAuth.post('/register',registerController)
routerAuth.get('/protect',protectRoute,isVerifed)


export default routerAuth