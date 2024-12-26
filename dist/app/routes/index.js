"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../module/user/user.route");
const auth_route_1 = require("../module/auth/auth.route");
const skill_route_1 = require("../module/skill/skill.route");
const project_route_1 = require("../module/project/project.route");
const blog_route_1 = require("../module/blog/blog.route");
const router = (0, express_1.Router)();
const routeData = [
    {
        route: user_route_1.userRouter,
        path: "/user",
    },
    {
        route: auth_route_1.authRouter,
        path: "/auth",
    },
    {
        route: skill_route_1.skillRouter,
        path: "/skills",
    },
    {
        route: project_route_1.projectRouter,
        path: "/projects",
    },
    {
        route: blog_route_1.blogRouter,
        path: "/blogs",
    },
];
routeData.forEach((route) => router.use(route.path, route.route));
exports.default = router;
