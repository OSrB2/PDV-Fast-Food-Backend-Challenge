import app from "../app";

const port = process.env.APP_PORT || process.env.PORT;

app.listen(port, () => console.info("App running in http://localhost:3000"));
