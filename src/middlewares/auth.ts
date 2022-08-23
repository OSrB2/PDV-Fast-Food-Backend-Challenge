import dotenv from "dotenv";
dotenv.config();
import { expressjwt } from "express-jwt";

export const auth = expressjwt({
  secret: process.env.SECRET_KEY as string,
  algorithms: ["HS256"],
});
