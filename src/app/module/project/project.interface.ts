import { Schema } from "mongoose";

export interface IProject extends Document {
  photo: string[]; // Image URL
  name: string; // Project name
  description: string; // Project description
  features: string[]; // List of features
  technologies: Schema.Types.ObjectId[]; // List of technologies used
  client: string; // Git client URL
  server: string; // Git server URL
  live: string; // Live project link
}
