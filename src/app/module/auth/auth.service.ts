import { AppError } from "../../Error/AppError";
import { tokenGenerator } from "../../utils/jwtTokenFunctions";
import { User } from "../user/user.model";
import { IUserLogin } from "./auth.interface";
import bcrypt from "bcrypt";
const userLogin = async (data: IUserLogin) => {
  const userinfo = await User.findOne({ email: data.email });
  if (!userinfo) {
    throw new AppError(401, "Check your email");
  }

  if ((await bcrypt.compare(data.password, userinfo.password)) == false) {
    throw new AppError(401, "Check your password");
  }

  const token = tokenGenerator({
    userEmail: userinfo.email,
    role: userinfo.role,
  });

  if (!token) {
    throw new AppError(404, "Something Went Wrong!! Try again.");
  }

  return { token };
};

export const authService = {
  userLogin,
};
