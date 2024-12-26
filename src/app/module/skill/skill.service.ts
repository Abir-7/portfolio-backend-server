import { ISkill } from "./skill.interface";
import { Skill } from "./skill.model";

const addSkill = async (data: ISkill) => {
  console.log(data);
  const result = await Skill.create(data);

  return result;
};

const getAllSkill = async () => {
  const result = await Skill.find();

  return result;
};
const updateSkill = async (_id: string, data: { data: Partial<ISkill> }) => {
  console.log(data);
  const result = await Skill.findOneAndUpdate({ _id }, data.data, {
    new: true,
  });
  console.log(result);
  return result;
};
export const skillService = {
  addSkill,
  getAllSkill,
  updateSkill,
};
