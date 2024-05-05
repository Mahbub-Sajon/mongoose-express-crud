import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/create-user', userController.createUSer);
router.get('/', userController.getUsers);
router.get('/:userId', userController.getSingleUser);

export const userRoutes = router;
