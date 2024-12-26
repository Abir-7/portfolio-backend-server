import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>(
  {
    photo: {
      type: [String],
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    technologies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Skill", // Assumes there is a Technology model
        required: true,
      },
    ],
    client: {
      type: String,
      required: true,
      trim: true,
    },
    server: {
      type: String,
      required: true,
      trim: true,
    },
    live: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

// Create and export the Mongoose model
const Project = model<IProject>("Project", projectSchema);
export default Project;
