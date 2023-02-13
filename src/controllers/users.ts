import okta, { User as OktaUser } from '@okta/okta-sdk-nodejs';

import { IUser, IUserPreference } from '../models/user';
import { userService } from '../services';

const oktaUrl = process.env.OKTA_URL;
const oktaToken = process.env.OKTA_TOKEN;

const createUser = (req, res) => {
  console.log('create user controller');

  res.send('create user controller is called');
};

const deleteUser = (req, res) => {};

const getUser = (req, res) => {
  console.log('getUser controller');
  res.json('get user controller is called');
};

const getUserById = async (req, res): Promise<IUser> => {
  const { userId } = req.params;

  // fetch user by id
  const userDetails = await userService.getById(userId);

  res.status(200).json({
    body: userDetails,
  });
  return userDetails;
};

const getUserPreference = async (req, res) => {
  const { userId } = req.params;

  const { preference } = await userService.getUserPreference(userId);
  return preference;
};

const oktaSignUp = async (req, res) => {
  try {
    const client: okta.Client = new okta.Client({
      orgUrl: oktaUrl,
      token: oktaToken,
    });
    const body = req.body;

    const response: OktaUser = await client.createUser(body);
    const { profile, id } = response;

    const createUserPayload: IUser = {
      oktaUserId: id,
      phone: profile.primaryPhone,
      name: `${profile.firstName} ${profile.lastName}`,
      age: `${profile?.age}`,
      // TODO need to check it
      preference: profile.preferences as any,
    };
    const userDetails = await userService.createUser(createUserPayload);
    res.status(201).json({
      data: userDetails,
    });
  } catch (error) {
    console.error('error signup to okta', error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, payload } = req.body;

    const userDetails = await userService.updateById(id, payload);

    res.status(200).json({
      data: userDetails,
    });
  } catch (error) {
    console.error(`Error updating user details`, error);
  }
};

const updateUserPreference = async (req, res) => {
  const { userId } = req.params;
  const { userPreferences } = req.body;

  const { preference } = await userService.updateUserPreference(userId, userPreferences);
  return preference;
};

export {
  createUser,
  deleteUser,
  getUser,
  getUserPreference,
  getUserById,
  oktaSignUp,
  updateUser,
  updateUserPreference,
};
