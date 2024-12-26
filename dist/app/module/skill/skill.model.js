"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    icon: {
        type: String,
        required: true, // Ensure the icon field is provided
    },
    skillName: {
        type: String,
        required: true, // Ensure the skillName field is provided
        trim: true,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});
exports.Skill = (0, mongoose_1.model)("Skill", SkillSchema);
