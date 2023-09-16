import { z } from "zod";

export const cardRecommendationBody = z.object({
  isStudent: z.boolean(),
  interestedInCashback: z.string(),
  creditScore: z.string(),
  creditReason: z.string(),
  preferredBanks: z.string(),
});

export type CardRecommendationBody = z.infer<typeof cardRecommendationBody>;
