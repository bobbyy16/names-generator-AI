import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

import gptRoutes from "./routes/gpt.routes";
app.use("/api", gptRoutes);

app.use("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App is listening at PORT - http://localhost:${PORT}`);
});
