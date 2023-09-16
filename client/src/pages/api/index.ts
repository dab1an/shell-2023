import { NextApiRequest, NextApiResponse } from "next";
import { getCardRecommendation } from "../../app/server/langchain";
import { z } from "zod";
import { cardRecommendationBody } from "../../schemas/cardRecommendationSchema";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method not allowed, please use POST" });
  }

  try {
    let body = cardRecommendationBody.parse(req.body);

    const result = await getCardRecommendation(body);
    return res.status(200).json(result);
  } catch (e) {
    if (e instanceof z.ZodError) {
      return res.status(400).json({ error: "Bad request", details: e.errors });
    }

    return res.status(500).json({ error: "Internal server error", details: e });
  }
};
