import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";

const createUser = catchAsync(async (req, res, next) => {
  const userData = req.body;
  const result = await userService.createUser(userData);
  sendResponse(res, {
    message: "User Created",
    success: true,
    statusCode: 200,
    data: result,
  });
});

export const UserController = {
  createUser,
};
