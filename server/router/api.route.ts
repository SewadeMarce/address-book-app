import { Router } from "express";
import authRouter from "./routes/auth.route";


const apiRouter = Router()


apiRouter.use('/auth',authRouter)

export default apiRouter; 