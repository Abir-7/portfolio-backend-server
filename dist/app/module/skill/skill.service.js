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
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillService = void 0;
const skill_model_1 = require("./skill.model");
const addSkill = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    const result = yield skill_model_1.Skill.create(data);
    return result;
});
const getAllSkill = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.Skill.find();
    return result;
});
const updateSkill = (_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    const result = yield skill_model_1.Skill.findOneAndUpdate({ _id }, data.data, {
        new: true,
    });
    console.log(result);
    return result;
});
exports.skillService = {
    addSkill,
    getAllSkill,
    updateSkill,
};
