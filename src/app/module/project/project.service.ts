// Import the Project model
import { IProject } from "./project.interface";
import Project from "./project.model";

const addProject = async (projectData: IProject) => {
  const newProject = await Project.create(projectData);
  return newProject;
};
const getAllProject = async () => {
  const result = await Project.find().populate("technologies");

  return result;
};
const getSingleProject = async (_id: string) => {
  const result = await Project.findOne({ _id }).populate("technologies");
  return result;
};
const deleteProject = async (_id: string) => {
  const result = await Project.findOneAndDelete({ _id });
  return result;
};
export const projectService = {
  addProject,
  getSingleProject,
  deleteProject,
  getAllProject,
};
