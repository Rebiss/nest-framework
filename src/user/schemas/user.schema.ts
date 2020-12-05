import * as mongoose from 'mongoose';
import { genderEnum } from '../enum/gender.enum';
import { roleEnum } from '../enum/role.enum';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  avatar: { type: String, default: null },
  avatarId: { type: String, default: null },
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  gender: { type: String, required: true, enum: Object.values(genderEnum) },
  address: {
    country: { type: String, default: null },
    city: { type: String, default: null },
    addressLine1: { type: String, default: null },
    addressLine2: { type: String, default: null },
  },
  profession: { type: String, default: null },
  phone: { type: String, default: null },
  role: { type: [String], required: true, enum: Object.values(roleEnum) },
  password: { type: String, required: true },
});

UserSchema.index({ email: 1 }, { unique: true });
