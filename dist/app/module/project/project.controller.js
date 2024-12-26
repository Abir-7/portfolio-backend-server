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
exports.projectController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const project_service_1 = require("./project.service");
const addProject = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = req.body;
    const result = yield project_service_1.projectService.addProject(projectData);
    (0, sendResponse_1.default)(res, {
        message: "Project Added Successfully",
        success: true,
        statusCode: 201,
        data: result,
    });
}));
const getAllProject = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = req.body;
    const result = yield project_service_1.projectService.getAllProject();
    (0, sendResponse_1.default)(res, {
        message: "Project fetched Successfully",
        success: true,
        statusCode: 201,
        data: result,
    });
}));
const getSingleProject = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_service_1.projectService.getSingleProject(id);
    (0, sendResponse_1.default)(res, {
        message: "Project is fetched Successfully",
        success: true,
        statusCode: 201,
        data: result,
    });
}));
const deleteProject = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_service_1.projectService.deleteProject(id);
    (0, sendResponse_1.default)(res, {
        message: "Project is deleted Successfully",
        success: true,
        statusCode: 201,
        data: result,
    });
}));
exports.projectController = {
    addProject,
    getAllProject,
    getSingleProject,
    deleteProject,
};
