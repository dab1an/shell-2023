import zodToJsonSchema from "zod-to-json-schema";
import { z } from "zod";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import { CardRecommendationBody } from "../schemas/cardRecommendationSchema";

const TEMPLATE = `Your job is to recommend 3 credit cards to users based on their responses to a questionnaire. It is extremely important that you pay close attention to the reason the person is trying to get the credit card and their credit score, as a poor credit score could mean they need a card that is meant for rebuilding credit. It is essential that you abide by at least one of the users bank preferences. Make it so that the 3 credit cards are from different banks. In the description, write about the benefits the card provides as well as why that card is a good fit for the user, include the percentage of cash back if possible as well.

User is a student: {isStudent}
User credit score: {creditScore}
User is interested in cash back: {interestedInCashback}
Reason user is looking to get a credit card: {creditReason}
User preferred banks: {preferredBanks}`;

const model = new ChatOpenAI({
  temperature: 0.8,
  modelName: "gpt-3.5-turbo",
});

const schema = z.object({
  creditCardName1: z
    .string()
    .describe("Name of first credit card recommended to user"),
  creditCardDescription1: z
    .string()
    .describe(
      "Description of first credit card recommended to user, include the cashback percentage, and explain the reason this card applies to this user"
    ),

  creditCardName2: z
    .string()
    .describe("Name of second credit card recommended to user"),
  creditCardDescription2: z
    .string()
    .describe(
      "Description of second credit card recommended to user, include the cashback percentage, and explain the reason this card applies to this user"
    ),

  creditCardName3: z
    .string()
    .describe("Name of third credit card recommended to user"),
  creditCardDescription3: z
    .string()
    .describe(
      "Description of third credit card recommended to user,include the cashback percentage, and explain the reason this card applies to this user"
    ),
});

const functionCallingModel = model.bind({
  functions: [
    {
      name: "output_formatter",
      description: "Should always be used to properly format output",
      parameters: zodToJsonSchema(schema),
    },
  ],
  function_call: { name: "output_formatter" },
});

const prompt = PromptTemplate.fromTemplate(TEMPLATE);

export const getCardRecommendation = async (params: CardRecommendationBody) => {
  const chain = prompt
    .pipe(functionCallingModel)
    .pipe(new JsonOutputFunctionsParser());

  const result = await chain.invoke(params);

  return result;
};
