import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authService } from "./auth.service";

const userLogin = catchAsync(async (req, res, next) => {
  const userData = req.body;
  const result = await authService.userLogin(userData);
  sendResponse(res, {
    message: "User Created",
    success: true,
    statusCode: 200,
    data: result,
  });
});

export const authController = {
  userLogin,
};
