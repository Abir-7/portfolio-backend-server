import { config } from "../../config/config";
import { User } from "./user.model";
import bcrypt from "bcrypt";
const createUser = async (data: {
  email: string;
  password: string;
  role: string;
}) => {
  console.log(data);
  const hasedPass = await bcrypt.hash(data.password.toString(), 14);

  const result = await User.create({ ...data, password: hasedPass });
  const userWithoutPassword = await User.findById(result._id).select(
    "-password"
  );
  return userWithoutPassword;
};

export const userService = {
  createUser,
};
