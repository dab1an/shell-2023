import { ChatOpenAI } from "langchain/chat_models/openai";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";
import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { CardRecommendationBody } from "./../../schemas/cardRecommendationSchema";

const TEMPLATE = `Your job is to recommend 3 credit cards to users based on their responses to a questionnaire. It is important that you mention in the description of the cards their cashback if they have one. Moreover, it is important that you base the selection of cards based on their needs as well as their credit score and whether they are a student. For example, if they have a poor credit score it may be best to recommend them a card that is meant for rebuilding credit. When giving these three credit cards give at least one card relating to the bank they have a preference for and make sure the other two are from unique banks as well, there should not be two cards from the same bank.

The selection of cards MUST be made by choosing from the following list: 

Chase Sapphire Preferred Card
Chase Sapphire Reserve
American Express Gold Card
Capital One Venture Rewards Credit Card
Citi Double Cash Card
Discover it Cash Back
Wells Fargo Propel American Express Card
Blue Cash Preferred Card from American Express
Citi Premier Card
Bank of America Travel Rewards Credit Card
Capital One Quicksilver Cash Rewards Credit Card
Capital One VentureOne Rewards Credit Card
Delta SkyMiles Gold American Express Card
Delta SkyMiles Platinum American Express Card
Southwest Rapid Rewards Premier Credit Card
United Explorer Card
IHG Rewards Club Premier Credit Card
Marriott Bonvoy Boundless Credit Card
Hilton Honors American Express Card
Hilton Honors American Express Surpass Card
The World Of Hyatt Credit Card
Citi Simplicity Card
Discover it Miles
U.S. Bank Altitude Go Visa Signature Card
Amazon Prime Visa Credit Card
Costco Anywhere Visa Card by Citi
Apple Card
The Platinum Card from American Express for Schwab
American Express Blue Business Cash Card
Chase Freedom Unlimited
Chase Freedom Flex
American Express Business Gold Card
American Express Blue Business Plus Credit Card
Capital One Spark Cash for Business
Ink Business Preferred Credit Card
Ink Business Cash Credit Card
Wells Fargo Reflect Card
Capital One Venture X Rewards Credit Card
U.S. Bank Visa Platinum Card
Wells Fargo Autograph Card
Ink Business Premier Credit Card
Citi Diamond Preferred Card
Southwest Rapid Rewards Plus Credit Card
Capital One Platinum Credit Card
Discover it Student Cash Back
Capital One Platinum Secured Credit Card
Secured Chime Credit Builder Visa
Discover it Balance Transfer

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
