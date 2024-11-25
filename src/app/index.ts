import express from "express";
import routes from "../routes/routes";
import db from "../infrastructure/database/index";
import errorHandler from "../middlewares/errorHandler";

const app = express();

db.hasConnection();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

export default app;
