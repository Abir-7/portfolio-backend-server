import { Router } from "express";
import { skillController } from "./skill.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/add", auth("admin"), skillController.addSkill);
router.get("/", skillController.getAllSkill);
router.patch("/:id", auth("admin"), skillController.updateSkill);

export const skillRouter = router;
