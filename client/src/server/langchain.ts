import zodToJsonSchema from "zod-to-json-schema";
import { z } from "zod";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import { CardRecommendationBody } from "../schemas/cardRecommendationSchema";

const TEMPLATE = `Your job is to recommend 3 credit cards to users based on their responses to a questionnaire. 

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
  data: z
    .object({
      creditCardName: z
        .string()
        .describe("Name of credit card recommended to user"),
      creditCardDescription: z
        .string()
        .describe(
          "Description of credit card recommended to user, include the cashback percentage, and explain the reason this card applies to this user"
        ),
    })
    .array()
    .length(3)
    .describe("Array giving information on the credit cards"),
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

console.log(zodToJsonSchema(schema));

const prompt = PromptTemplate.fromTemplate(TEMPLATE);

export const getCardRecommendation = async (params: CardRecommendationBody) => {
  const chain = prompt
    .pipe(functionCallingModel)
    .pipe(new JsonOutputFunctionsParser());

  const result = await chain.invoke(params);

  return result;
};
