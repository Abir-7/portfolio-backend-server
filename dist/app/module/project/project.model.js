"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
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
            type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true, // Automatically add createdAt and updatedAt
});
// Create and export the Mongoose model
const Project = (0, mongoose_1.model)("Project", projectSchema);
exports.default = Project;
