import { Hono } from "hono";
import reader from "./reader-worker.js";

const app = new Hono();
app.all("*", ({ req }) => reader.fetch(req.raw, process.env));

export default app;
