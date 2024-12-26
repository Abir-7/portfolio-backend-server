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
exports.skillController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const skill_service_1 = require("./skill.service");
const addSkill = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield skill_service_1.skillService.addSkill(data);
    (0, sendResponse_1.default)(res, {
        message: "Skill Added",
        success: true,
        statusCode: 200,
        data: result,
    });
}));
const getAllSkill = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.skillService.getAllSkill();
    (0, sendResponse_1.default)(res, {
        message: "Skill fetched",
        success: true,
        statusCode: 200,
        data: result,
    });
}));
const updateSkill = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.skillService.updateSkill(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        message: "Skill updated",
        success: true,
        statusCode: 200,
        data: result,
    });
}));
exports.skillController = {
    addSkill,
    getAllSkill,
    updateSkill,
};
