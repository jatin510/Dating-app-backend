import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from '../controllers';

const userRoutes = Router();

userRoutes.route('/').get(getUser).post(createUser);

userRoutes.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default userRoutes;
