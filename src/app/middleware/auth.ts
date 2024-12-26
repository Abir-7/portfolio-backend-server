import { NextFunction, Request, Response } from "express";

import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";
import { AppError } from "../Error/AppError";
import { config } from "../config/config";
import { User } from "../module/user/user.model";

export type T_UserRole = "admin";
export const auth = (...userRole: T_UserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const tokenData = req.headers.authorization;

    const token = tokenData;

    if (!token) {
      throw new AppError(401, "You have no access to this route1");
    }

    try {
      const decoded = jwt.verify(
        token,
        config.jwt_secrete_key as string
      ) as JwtPayload & { userEmail: string; role: T_UserRole };

      const { role, userEmail } = decoded;

      const user = await User.findOne({ email: userEmail });
      //check user exixt or not
      if (!user) {
        throw new AppError(401, "You have no access to this route");
      }

      if (userRole && !userRole.includes(role)) {
        throw new AppError(401, "You have no access to this route");
      }

      req.user = decoded;
      next();
    } catch (error: any) {
      throw new AppError(401, "You have no access to this route");
    }
  });
};
