import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { cardRecommendationBody } from "./schemas/cardRecommendationSchema";
import { getCreditCardRecommendations } from "./langchain";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/", async (req: Request, res: Response) => {
  let body = cardRecommendationBody.parse(req.body);

  const result = await getCreditCardRecommendations(body);

  return res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
