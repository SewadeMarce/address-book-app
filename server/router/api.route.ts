import { Router } from "express";
import authRouter from "./routes/auth.route";
import contactsRouter from "./routes/contacts.route";


const apiRouter = Router()


apiRouter.use('/auth',authRouter)
apiRouter.use('/contacts',contactsRouter)


export default apiRouter; 