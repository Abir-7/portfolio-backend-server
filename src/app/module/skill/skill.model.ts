import { model, Schema } from "mongoose";
import { ISkill } from "./skill.interface";

const SkillSchema = new Schema<ISkill>(
  {
    icon: {
      type: String,
      required: true, // Ensure the icon field is provided
    },
    skillName: {
      type: String,
      required: true, // Ensure the skillName field is provided
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);
export const Skill = model<ISkill>("Skill", SkillSchema);
