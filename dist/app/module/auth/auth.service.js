"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const AppError_1 = require("../../Error/AppError");
const jwtTokenFunctions_1 = require("../../utils/jwtTokenFunctions");
const user_model_1 = require("../user/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userLogin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userinfo = yield user_model_1.User.findOne({ email: data.email });
    if (!userinfo) {
        throw new AppError_1.AppError(401, "Check your email");
    }
    if ((yield bcrypt_1.default.compare(data.password, userinfo.password)) == false) {
        throw new AppError_1.AppError(401, "Check your password");
    }
    const token = (0, jwtTokenFunctions_1.tokenGenerator)({
        userEmail: userinfo.email,
        role: userinfo.role,
    });
    if (!token) {
        throw new AppError_1.AppError(404, "Something Went Wrong!! Try again.");
    }
    return { token };
});
exports.authService = {
    userLogin,
};
