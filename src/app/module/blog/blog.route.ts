import { Router } from "express";

import { auth } from "../../middleware/auth";
import { blogController } from "./blog.controller";

const router = Router();

router.post("/add", auth("admin"), blogController.addBlog);
router.get("/", blogController.getAllBlog);
router.get("/:id", blogController.getSingleBlog);
router.patch("/:id", auth("admin"), blogController.updateBlog);
router.delete("/:id", auth("admin"), blogController.deleteBlog);

export const blogRouter = router;
