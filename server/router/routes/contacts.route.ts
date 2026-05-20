import { Router } from "express";
import { create, deleteById, getById, pushFavorite, search, update } from "../../controllers/contact.controller";
import { authMiddleware } from "../../middleware/auth";

const contactsRouter = Router()
contactsRouter.use(authMiddleware)
contactsRouter.get('/search/:id',search);
contactsRouter.get('/:id',getById);
contactsRouter.put('/favorite/:id',pushFavorite);
contactsRouter.put('/:id',update);
contactsRouter.delete('/:id',deleteById);
contactsRouter.post('/create',create);

export default contactsRouter;