import { Schema, model } from 'mongoose';
import { IUser } from './user';

export interface IUserPreference {
  user: Schema.Types.ObjectId | IUser;
  gender: string;
  age: number;
  locationRange: string;
  drinking: boolean;
  smoking: boolean;
}

const userPreference = new Schema<IUserPreference>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  gender: { type: String },
  locationRange: { type: String },
  age: { type: Number },
  drinking: { type: Boolean },
  smoking: { type: Boolean },
});

export const UserPreference = model<IUserPreference>('UserPreference', userPreference);
