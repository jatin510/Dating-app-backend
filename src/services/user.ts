import User, { IUser } from '../models/user';

const getUser = () => {
  console.log('get users');
};

const getById = async (userId: string): Promise<IUser> => {
  return await User.findOne({ _id: userId });
};

const createUser = async (user: IUser): Promise<IUser> => {
  try {
    return await User.create(user);
  } catch (error) {
    throw Error('Error creating a user');
  }
};

const updateById = async (userId: string, userPayload: Partial<IUser>): Promise<IUser> => {
  try {
    const options = { new: true };
    return await User.findOneAndUpdate({ _id: userId }, userPayload, options);
  } catch (error) {
    throw Error('Error creating a user');
  }
};

export { createUser, getUser, getById, updateById };
