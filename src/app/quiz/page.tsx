/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import TheButton from '../_components/TheButton'
const page = () => {
  return (
    <div className='pt-44 flex flex-col items-center gap-4 '>
      <p>FIND YOUR PERFECT CREDIT CARD WITH AI</p>
      <h1 className='text-4xl'>The AI Card Quiz</h1>
      <p className='text-center w-10/12'>
        Welcome to CardWise.ai, where finding the perfect credit card is effortless. Take our quick quiz, to match your financial needs and goals in
        seconds.
      </p>
      <Link href='/quiz/questions'>
        <TheButton>Start Quiz</TheButton>
      </Link>
    </div>
  )
}

export default page
