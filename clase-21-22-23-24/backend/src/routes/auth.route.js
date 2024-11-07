import { Router } from "express";
import {forgotPasswordController, loginController, registerController, resetPasswordController, verifyEmailController} from "../controllers/authentication.controller.js";

const authRouter = Router()

authRouter.post('/recovery-password/:reset-token', ()=>{
    console.log('hola')
})

authRouter.get('/verify-email/:validation_token', verifyEmailController)

authRouter.post('/register', registerController)

authRouter.post('/login', loginController)


authRouter.post('/forgot-password', forgotPasswordController)



export default authRouter