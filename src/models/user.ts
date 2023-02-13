import { Schema, model, connect } from 'mongoose';

export interface IUser {
  name: string;
  age: string;
  phone: string;
  oktaUserId: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: String, required: true },
  phone: { type: String, required: true },
  oktaUserId: { type: String, unique: true, required: true },
});

const User = model<IUser>('User', userSchema);

export default User;
