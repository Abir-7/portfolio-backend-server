import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    role: { type: String, default: "admin" }, // Fixed role definition with a default value
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
