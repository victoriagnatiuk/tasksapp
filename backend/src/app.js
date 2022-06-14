import express from "express";
import routes from "./routes/tasks";

const app = express();

app.use(routes);

export default app;