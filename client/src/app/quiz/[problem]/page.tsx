import { Chonburi } from "next/font/google";
import React from "react";
type QuizData = {
  [key: string]: {
    question: string;
    choices: string[];
  };
};
const Page = ({ params }: any) => {
  const quizData: QuizData = {
    problem1: {
      question: "Are you currently a student?",
      choices: ["Yes", "No"],
    },

    problem2: {
      question: "What is your main reason for getting a credit card?",
      choices: [
        "Building credit",
        "Earning rewards",
        "Emergency expenses",
        "Travel benefits",
      ],
    },

    problem3: {
      question: "What is your credit score range?",
      choices: [
        "Excellent (above 750)",
        "Good (700-749)",
        "Fair (650-699)",
        "Poor (below 650)",
      ],
    },
    problem4: {
      question: "How often do you plan to use the credit card for purchases?",
      choices: ["Daily", "Weekly", "Monthly", "Rarely"],
    },
    problem5: {
      question: "Are you interested in earning cashback rewards?",
      choices: ["Yes", "No"],
    },
    problem6: {
      question: "Do you travel frequently and want travel rewards or benefits?",
      choices: ["Yes", "No"],
    },
    problem7: {
      question: "Are you willing to pay an annual fee for premium benefits?",
      choices: ["Yes", "No"],
    },
    problem8: {
      question: "Have you had any credit card debt in the past?",
      choices: ["Yes", "No"],
    },
    problem9: {
      question: "Have you had any credit card debt in the past?",
      choices: ["Yes", "No"],
    },
    problem10: {
      question: "Do you have a bank preference",
      choices: [
        "Chase",
        "Wells Fargo",
        "TD Bank",
        "Bank of America",
        "Capital One",
        "American Express",
        "Discover",
        "Citi Bank",
        "No preference",
      ],
    },
  };
  const data = quizData[params.problem];
  return (
    <div>
      <h1>{params.problem}</h1>
      <p>{data.question}</p>
    </div>
  );
};

export default Page;
