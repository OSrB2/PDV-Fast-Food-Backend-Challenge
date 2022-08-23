import dotenv from "dotenv";
dotenv.config();

export const secret = {
  key: process.env.SECRET_KEY as string,
};
