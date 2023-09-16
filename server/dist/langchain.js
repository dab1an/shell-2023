"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCreditCardRecommendations = void 0;
const zod_to_json_schema_1 = __importDefault(require("zod-to-json-schema"));
const zod_1 = require("zod");
const openai_1 = require("langchain/chat_models/openai");
const prompts_1 = require("langchain/prompts");
const output_parsers_1 = require("langchain/output_parsers");
const PROMPT = `Your job is to recommend 3 credit cards to users based on their responses to a questionnaire. 

User is a student: {isStudent}
User credit score: {creditScore}
User is interested in cash back: {interestedInCashback}
Reason user is looking to get a credit card: {creditReason}
User preferred banks: {preferredBanks}`;
const model = new openai_1.ChatOpenAI({
    temperature: 0.8,
    modelName: "gpt-3.5-turbo",
});
const schema = zod_1.z.object({
    creditCardName1: zod_1.z
        .string()
        .describe("Name of first credit card recommended to user"),
    creditCardDescription1: zod_1.z
        .string()
        .describe("Description of first credit card recommended to user, include the cashback percentage, and explain the reason this card applies to this user"),
    creditCardName2: zod_1.z
        .string()
        .describe("Name of second credit card recommended to user"),
    creditCardDescription2: zod_1.z
        .string()
        .describe("Description of second credit card recommended to user, include the cashback percentage, and explain the reason this card applies to this user"),
    creditCardName3: zod_1.z
        .string()
        .describe("Name of third credit card recommended to user"),
    creditCardDescription3: zod_1.z
        .string()
        .describe("Description of third credit card recommended to user,include the cashback percentage, and explain the reason this card applies to this user"),
});
const functionCallingModel = model.bind({
    functions: [
        {
            name: "output_formatter",
            description: "Should always be used to properly format output",
            parameters: (0, zod_to_json_schema_1.default)(schema),
        },
    ],
    function_call: { name: "output_formatter" },
});
const prompt = prompts_1.PromptTemplate.fromTemplate(PROMPT);
const getCreditCardRecommendations = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const chain = prompt
        .pipe(functionCallingModel)
        .pipe(new output_parsers_1.JsonOutputFunctionsParser());
    const result = yield chain.invoke(params);
    return result;
});
exports.getCreditCardRecommendations = getCreditCardRecommendations;
