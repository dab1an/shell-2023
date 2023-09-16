/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
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
        <button className=' bg-gradient-to-r from-[#68b76a] to-[#30DF36] hover:from-[#499e4c] hover:to-[#22bf27] text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce'>
          Start Quiz
        </button>
      </Link>
    </div>
  )
}

export default page
