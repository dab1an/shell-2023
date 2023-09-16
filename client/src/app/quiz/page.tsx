/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import TheButton from '../_components/TheButton'
const page = () => {
  return (
    <div className='pt-44 flex flex-col items-center gap-4'>
      <p>FIND YOUR PERFECT CREDIT CARD</p>
      <h1 className='text-4xl'>The Card Quiz</h1>
      <p className='text-center w-10/12'>
        Welcome to APPNAME, where finding the perfect credit card is effortless. Take our quick quiz, to match your financial needs and goals in
        seconds.
      </p>
      <Link href='/quiz/question1'>
        <TheButton>Start Quiz</TheButton>
      </Link>
    </div>
  )
}

export default page
