import express from "express";
import routes from "../routes/routes";
import db from '../infrastructure/database/index'

const app = express();

db.hasConnection();

app.use(express.json());
app.use(routes);

export default app;
