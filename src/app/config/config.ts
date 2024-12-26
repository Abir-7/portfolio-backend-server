import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export const config = {
  port: process.env.PORT,
  saltRounds: process.env.SALTROUNDS,
  jwt_secrete_key: process.env.JWT_ACCESS_SECRET,
  jwt_secrete_date: process.env.JWT_ACCESS_EXPIRES_IN,
  mongoDbURI: process.env.DATABASE,
};
