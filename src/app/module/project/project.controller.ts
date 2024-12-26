import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";

const addProject = catchAsync(async (req, res, next) => {
  const projectData = req.body;
  const result = await projectService.addProject(projectData);
  sendResponse(res, {
    message: "Project Added Successfully",
    success: true,
    statusCode: 201,
    data: result,
  });
});

const getAllProject = catchAsync(async (req, res, next) => {
  const projectData = req.body;
  const result = await projectService.getAllProject();
  sendResponse(res, {
    message: "Project fetched Successfully",
    success: true,
    statusCode: 201,
    data: result,
  });
});
const getSingleProject = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await projectService.getSingleProject(id);
  sendResponse(res, {
    message: "Project is fetched Successfully",
    success: true,
    statusCode: 201,
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await projectService.deleteProject(id);
  sendResponse(res, {
    message: "Project is deleted Successfully",
    success: true,
    statusCode: 201,
    data: result,
  });
});

export const projectController = {
  addProject,
  getAllProject,
  getSingleProject,
  deleteProject,
};
