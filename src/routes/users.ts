import { Router } from 'express';
import { createUser, getUser } from '../controllers';

const userRoutes = Router();

userRoutes.route('/').get(getUser).post(createUser);

export default userRoutes;
