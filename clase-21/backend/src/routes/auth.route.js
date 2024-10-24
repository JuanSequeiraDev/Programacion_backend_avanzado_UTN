import { Router } from "express";
import registerController from "../controllers/route.controller.js";

const authRouter = Router()

authRouter.post('/register', registerController)
/* authRouter.post('/login')
authRouter.get('/veify-email') */

export default authRouter