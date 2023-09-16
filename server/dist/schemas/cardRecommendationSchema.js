"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardRecommendationBody = void 0;
const zod_1 = require("zod");
exports.cardRecommendationBody = zod_1.z.object({
    isStudent: zod_1.z.string(),
    interestedInCashback: zod_1.z.string(),
    creditScore: zod_1.z.string(),
    creditReason: zod_1.z.string(),
    preferredBanks: zod_1.z.string(),
});
