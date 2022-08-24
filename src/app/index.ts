import express from "express";
import routes from "../routes/routes";
import db from "../infrastructure/database/index";
import handleError from "../middlewares/handleError";

const app = express();

db.hasConnection();

app.use(express.json());
app.use(routes);
app.use(handleError);

export default app;
