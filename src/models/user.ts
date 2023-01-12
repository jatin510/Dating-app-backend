import { Schema, model, connect } from 'mongoose';

interface IUser {
  name: string;
  age: string;
  phone: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: String, required: true },
  phone: { type: String, required: true },
});

const User = model<IUser>('User', userSchema);

export default User;
