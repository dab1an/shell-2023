/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React from 'react'
type QuizData = {
  [key: string]: {
    number: number
    question: string
    choices: string[]
    image?: string
  }
}
const Page = ({ params }: any) => {
  const quizData: QuizData = {
    question1: {
      number: 1,
      question: 'What is your credit score range?',
      choices: ['Excellent (above 750)', 'Good (700-749)', 'Fair (650-699)', 'Poor (below 650)'],
      image: '/undraw1.svg',
    },
    question2: {
      number: 2,
      question: 'What is your main reason for getting a credit card?',
      choices: ['Building credit', 'Earning rewards', 'Emergency expenses', 'Travel benefits'],
      image: '/undraw2.svg',
    },
    question3: {
      number: 3,
      question: 'How often do you plan to use the credit card for purchases?',
      choices: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
      image: '/undraw3.svg',
    },
    question4: {
      number: 4,
      question: 'Do you plan to carry a balance on your credit card month-to-month?',
      choices: ['Yes, often', 'Occasionally', 'No, I pay in full each month'],
      image: '/undraw4.svg',
    },
    question5: {
      number: 5,
      question: 'Are you interested in earning cashback rewards?',
      choices: ['Yes', 'No'],
      image: '/undraw5.svg',
    },
    question6: {
      number: 6,
      question: 'Do you travel frequently and want travel rewards or benefits?',
      choices: ['Yes', 'No'],
      image: '/undraw6.svg',
    },
    question7: {
      number: 7,
      question: 'Are you willing to pay an annual fee for premium benefits?',
      choices: ['Yes', 'No'],
      image: '/undraw7.svg',
    },
    question8: {
      number: 8,
      question: 'Have you had any credit card debt in the past?',
      choices: ['Yes', 'No'],
      image: '/undraw8.svg',
    },
    question9: {
      number: 9,
      question: 'What is your estimated monthly income?',
      choices: ['Less than $1,000', '$1,000 - $2,500', '$2,500 - $5,000', 'More than $5,000'],
      image: '/undraw9.svg',
    },
  }
  const data = quizData[params.question]
  return (
    <div className='flex flex-col items-center'>
      <p className='text-neutral-400'>Question {data.number}</p>
      <div className='flex items-center'>
        <h1 className='text-2xl text-center'>{data.question}</h1>
        <img src={data.image} alt='' className='w-80 max-h-64' />
      </div>
      <div className='grid grid-cols-2 gap-4 w-8/12 justify-evenly mt-14'>
        {data.choices.map((choice, index) => {
          return (
            <div key={index} className='flex bg-white border-2 border-neutral-900 w-56 rounded p-2 gap-2 h-12 items-center'>
              <p className='bg-[#30DF36] rounded-full w-6 h-6 flex justify-center items-center'>{index + 1}</p>
              <p>{choice}</p>
            </div>
          )
        })}
      </div>
      <Link href={`/quiz/question${data.number + 1}`}>
        <button className='mt-14 bg-gradient-to-r from-[#68b76a] to-[#30DF36] hover:from-[#499e4c] hover:to-[#22bf27] text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce'>
          Next Question
        </button>
      </Link>
    </div>
  )
}

export default Page
