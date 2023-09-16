/* eslint-disable @next/next/no-img-element */
'use client'
import TheButton from '@/app/_components/TheButton'
import Link from 'next/link'
import React, { useState } from 'react'
type QuizData = {
  number: number
  question: string
  choices: string[]
  image?: string
}
const Page = ({ params }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const quizData: QuizData[] = [
    {
      number: 1,
      question: 'Are you currently a student?',
      choices: ['Yes', 'No'],
      image: '/undraw1.svg',
    },

    {
      number: 2,
      question: 'What is your main reason for getting a credit card?',
      choices: ['Building credit', 'Earning rewards', 'Emergency expenses', 'Travel benefits'],
      image: '/undraw2.svg',
    },

    {
      number: 3,
      question: 'What is your credit score range?',
      choices: ['Excellent (above 750)', 'Good (700-749)', 'Fair (650-699)', 'Poor (below 650)'],
      image: '/undraw3.svg',
    },
    {
      number: 4,
      question: 'How often do you plan to use the credit card for purchases?',
      choices: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
      image: '/undraw4.svg',
    },
    {
      number: 5,
      question: 'Are you interested in earning cashback rewards?',
      choices: ['Yes', 'No'],
      image: '/undraw5.svg',
    },
    {
      number: 6,
      question: 'Do you travel frequently and want travel rewards or benefits?',
      choices: ['Yes', 'No'],
      image: '/undraw6.svg',
    },
    {
      number: 7,
      question: 'Are you willing to pay an annual fee for premium benefits?',
      choices: ['Yes', 'No'],
      image: '/undraw7.svg',
    },
    {
      number: 8,
      question: 'Have you had any credit card debt in the past?',
      choices: ['Yes', 'No'],
      image: '/undraw8.svg',
    },
    {
      number: 9,
      question: 'Have you had any credit card debt in the past?',
      choices: ['Yes', 'No'],
      image: '/undraw9.svg',
    },
    {
      number: 10,
      question: 'Do you have a bank preference',
      choices: ['Chase', 'Wells Fargo', 'TD Bank', 'Bank of America', 'Capital One', 'American Express', 'Discover', 'Citi Bank', 'No preference'],
      image: '/undraw10.svg',
    },
  ]
  const data = quizData[params.question]
  return (
    <div className='flex flex-col items-center width-full '>
      <div className='w-10/12 flex flex-col items-center'>
        {params.question === 'result' ? (
          <h1>RESULTS</h1>
        ) : (
          <>
            <p className='text-neutral-400'>Question {currentQuestion + 1}</p>
            <div className='flex items-center'>
              <h1 className='text-2xl text-center'>{quizData[currentQuestion].question}</h1>
              <img src={quizData[currentQuestion].image} alt='' className='w-80 max-h-64' />
            </div>
            <div className='gridChoices mt-14'>
              {quizData[currentQuestion].choices.map((choice, index) => {
                return (
                  <div key={index} className='flex bg-white border-2 border-neutral-900 w-full rounded p-2 gap-2 h-12 items-center'>
                    <p className='bg-[#30DF36] rounded-full w-6 h-6 flex justify-center items-center'>{index + 1}</p>
                    <p>{choice}</p>
                  </div>
                )
              })}
            </div>
            {currentQuestion + 1 === 10 ? (
              <Link href={`/quiz/result`} className='mt-14'>
                <TheButton>Submit Quiz</TheButton>
              </Link>
            ) : (
              <div className='mt-10' onClick={() => setCurrentQuestion(prev => prev + 1)}>
                <TheButton>Next Question</TheButton>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Page
