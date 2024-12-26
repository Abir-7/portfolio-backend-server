import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import noRoute from "./app/utils/noRoute";
import router from "./app/routes";
const app = express();
const corsOptions = {
  origin: [
    "*",
    "https://abir-portfolio-07.netlify.app",
    "https://portfolio-backend-six-olive.vercel.app",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1", router);
app.use(globalErrorHandler);
app.use(noRoute);

export default app;
