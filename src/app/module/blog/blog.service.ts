// Import the Project model

import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const addBlog = async (projectData: IBlog) => {
  const newProject = await Blog.create(projectData);
  return newProject;
};
const getAllBlog = async () => {
  const result = await Blog.find();
  console.log(result, { depth: true });
  return result;
};
const getSingleBlog = async (_id: string) => {
  const result = await Blog.findOne({ _id });
  console.log(result, { depth: true });
  return result;
};
const updateBlog = async (_id: string, data: { data: Partial<IBlog> }) => {
  const result = await Blog.findOneAndUpdate({ _id }, data.data);

  return result;
};
const deleteBlog = async (_id: string) => {
  const result = await Blog.findOneAndDelete({ _id });

  return result;
};
export const blogService = {
  addBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
