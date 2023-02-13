import User, { IUser, IUserPreference } from '../models/user';

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

const getUserPreference = async (userId: string): Promise<IUserPreference> => {
  const { preference } = await User.findOne({ _id: userId });
  return preference;
};

const updateById = async (userId: string, userPayload: Partial<IUser>): Promise<IUser> => {
  try {
    const options = { new: true };
    return await User.findOneAndUpdate({ _id: userId }, userPayload, options);
  } catch (error) {
    throw Error('Error creating a user');
  }
};

const updateUserPreference = async (userId: string, userPreference: any): Promise<IUserPreference> => {
  const { preference } = await User.findOneAndUpdate({ _id: userId }, { preference: userPreference }, { new: true });
  return preference;
};

export { createUser, getById, getUser, getUserPreference, updateById, updateUserPreference };