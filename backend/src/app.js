import express from "express";
import routes from "./routes/tasks";

const app = express();

app.use(express.json());

app.use(routes);

export default app;