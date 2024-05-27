import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { songs } from "./data";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/question/:questionIndex", (req, res) => {
  console.log("params: ", req.params);
  const questionIndex = req.params.questionIndex;
  const numericIndex = parseInt(questionIndex, 10);
  res.send(songs[numericIndex]);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
