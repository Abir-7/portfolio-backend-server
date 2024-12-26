import { Router } from "express";
import { projectController } from "./project.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/add", auth("admin"), projectController.addProject);
router.get("/", projectController.getAllProject);
router.get("/:id", projectController.getSingleProject);
router.delete("/:id", auth("admin"), projectController.deleteProject);

export const projectRouter = router;
