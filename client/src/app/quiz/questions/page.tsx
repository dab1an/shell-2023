/* eslint-disable @next/next/no-img-element */
"use client";
import Results from "@/app/_components/Results";
import TheButton from "@/app/_components/TheButton";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";
import { Line } from "rc-progress";
import React, { useState } from "react";
type QuizData = {
  number: number;
  question: string;
  choices: string[];
  image?: string;
};
type IProfileData = {
  isStudent: string;
  interestedInCashback: string;
  creditScore: string;
  creditReason: string;
  preferredBanks: string;
};
const Page = ({ params }: any) => {
  const [globalData, setGlobalData] = useState();

  async function getCards(profileData: IProfileData) {
    console.log(profileData);
    console.log(JSON.stringify(profileData));
    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = await res.json();
    setGlobalData(data);
    console.log(data);
  }
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [highlightedChoices, setHighlightedChoices] = useState<number[]>([]);
  const quizData: QuizData[] = [
    {
      number: 1,
      question: "Are you currently a student?",
      choices: ["Yes", "No"],
      image: "/undraw1.svg",
    },

    {
      number: 2,
      question: "What is your main reason for getting a credit card?",
      choices: [
        "Building credit",
        "Earning rewards",
        "Emergency expenses",
        "Travel benefits",
      ],
      image: "/undraw2.svg",
    },

    {
      number: 3,
      question: "What is your credit score range?",
      choices: [
        "Excellent (above 750)",
        "Good (700-749)",
        "Fair (650-699)",
        "Poor (below 650)",
      ],
      image: "/undraw3.svg",
    },
    {
      number: 4,
      question: "How often do you plan to use the credit card for purchases?",
      choices: ["Daily", "Weekly", "Monthly", "Rarely"],
      image: "/undraw4.svg",
    },
    {
      number: 5,
      question: "Are you interested in earning cashback rewards?",
      choices: ["Yes", "No"],
      image: "/undraw5.svg",
    },
    {
      number: 6,
      question: "Do you travel frequently and want travel rewards or benefits?",
      choices: ["Yes", "No"],
      image: "/undraw6.svg",
    },
    {
      number: 7,
      question: "Are you willing to pay an annual fee for premium benefits?",
      choices: ["Yes", "No"],
      image: "/undraw7.svg",
    },
    {
      number: 8,
      question: "Have you had any credit card debt in the past?",
      choices: ["Yes", "No"],
      image: "/undraw8.svg",
    },
    {
      number: 9,
      question: "Have you owned any credit cards in the past?",
      choices: ["Yes", "No"],
      image: "/undraw9.svg",
    },
    {
      number: 10,
      question: "Do you have a bank preference?",
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
      image: "/undraw10.svg",
    },
  ];
  const [profileData, setProfileData] = useState<IProfileData>({
    isStudent: "false",
    interestedInCashback: "false",
    creditScore: "650",
    creditReason: "travel",
    preferredBanks: "Chase",
  });

  const handleNextQuestion = () => {
    const cur = quizData[currentQuestion].choices[highlightedChoices[0]];

    if (currentQuestion + 1 === 1) {
      setProfileData((prev) => ({ ...prev, isStudent: cur }));
    }
    if (currentQuestion + 1 === 5) {
      setProfileData((prev) => ({ ...prev, interestedInCashback: cur }));
    }
    if (currentQuestion + 1 === 3) {
      let newCur = "";
      if (highlightedChoices[0] === 0) newCur = "750";
      if (highlightedChoices[0] === 1) newCur = "725";
      if (highlightedChoices[0] === 2) newCur = "675";
      if (highlightedChoices[0] === 3) newCur = "625";
      setProfileData((prev) => ({ ...prev, creditScore: newCur }));
    }
    if (currentQuestion + 1 === 2) {
      setProfileData((prev) => ({ ...prev, creditReason: cur }));
    }
    if (currentQuestion + 1 === 10) {
      let banksString = highlightedChoices
        .map((i) => quizData[currentQuestion].choices[i])
        .join(",");
      console.log(banksString);

      setProfileData((prev) => {
        const updatedProfileData = { ...prev, preferredBanks: banksString };
        // Call getCards with the updated profile data
        console.log(updatedProfileData);
        getCards(updatedProfileData);
        return updatedProfileData;
      });
    }
    setCurrentQuestion((prev) => prev + 1);
    setHighlightedChoices([]);
  };
  const handleHighlightQuestion = (index: number, currentQuestion: number) => {
    if (currentQuestion === 9) {
      if (highlightedChoices.includes(index)) {
        setHighlightedChoices((prev) => prev.filter((item) => item !== index));
      } else {
        setHighlightedChoices((prev) => [...prev, index]);
      }
      setProfileData((prev) => ({
        ...prev,
        preferredBanks: highlightedChoices.join(","),
      }));
    } else {
      setHighlightedChoices([index]);
    }
  };
  const isHighlighted = (index: number) => {
    return highlightedChoices.includes(index);
  };
  return (
    <div className="flex flex-col items-center width-full ">
      <div className="w-10/12 flex flex-col items-center">
        {currentQuestion === 10 ? (
          <Results data={globalData} />
        ) : (
          <>
            <ProgressBar completed={(currentQuestion + 1) / 10} />
            <Line
              percent={(currentQuestion + 1) / 10}
              strokeWidth={4}
              strokeColor="#D3D3D3"
            />
            <div className="flex items-center">
              <h1 className="text-2xl text-center">
                {quizData[currentQuestion].question}
              </h1>
              <img
                src={quizData[currentQuestion].image}
                alt=""
                className="w-80 max-h-64"
              />
            </div>
            <div className="flex flex-wrap mt-14 gap-2 justify-center">
              {quizData[currentQuestion].choices.map((choice, index) => {
                return (
                  <div
                    key={index}
                    onClick={() =>
                      handleHighlightQuestion(index, currentQuestion)
                    }
                    className={`flex ${
                      isHighlighted(index) ? "bg-[#ceffd0]" : "bg-[#fff]"
                    } border-2 border-neutral-700 rounded p-2 gap-2 h-12 w-56 items-center justify-center cursor-pointer transition-colors duration-500`}
                  >
                    <p className="font-bold">{choice}</p>
                  </div>
                );
              })}
            </div>
            {currentQuestion + 1 === 10 ? (
              <div
                className="mt-14"
                onClick={() => {
                  handleNextQuestion();
                  getCards(profileData);
                }}
              >
                <TheButton>Submit Quiz</TheButton>
              </div>
            ) : (
              <div className="mt-10" onClick={() => handleNextQuestion()}>
                <TheButton>Next Question</TheButton>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
