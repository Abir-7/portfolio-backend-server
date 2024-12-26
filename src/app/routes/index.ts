import { Router } from "express";
import { userRouter } from "../module/user/user.route";
import { authRouter } from "../module/auth/auth.route";
import { skillRouter } from "../module/skill/skill.route";
import { projectRouter } from "../module/project/project.route";
import { blogRouter } from "../module/blog/blog.route";

const router = Router();

const routeData = [
  {
    route: userRouter,
    path: "/user",
  },
  {
    route: authRouter,
    path: "/auth",
  },
  {
    route: skillRouter,
    path: "/skills",
  },
  {
    route: projectRouter,
    path: "/projects",
  },
  {
    route: blogRouter,
    path: "/blogs",
  },
];

routeData.forEach((route) => router.use(route.path, route.route));
export default router;
