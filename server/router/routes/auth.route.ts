import { Router } from "express";
import { login, logout, profile, register } from "../../controllers/auth.controller";
import { authMiddleware } from "../../middleware/auth";

const authRouter: Router = Router();

// REGISTER user
authRouter.post('/register', register);

// LOGIN user
authRouter.post('/login', login);

// LOGOUT user
authRouter.post('/logout',logout);

// GET user profile
authRouter.get('/profile/:id', authMiddleware, profile);

export default authRouter;
