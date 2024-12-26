import mongoose, { Schema, Document } from "mongoose";
import { IBlog } from "./blog.interface";

const ProjectSchema: Schema = new Schema<IBlog>(
  {
    photo: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model<IBlog>("Blog", ProjectSchema);

export default Blog;
