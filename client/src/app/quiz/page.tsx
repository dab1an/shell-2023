/* eslint-disable @next/next/no-img-element */
import React from 'react'
import BlobBackground from '../_components/BlobBackground'
const page = () => {
  return (
    <div className='pt-44 flex flex-col items-center gap-4'>
      <p>FIND YOUR PERFECT CREDIT CARD</p>
      <h1 className='text-4xl'>The Card Quiz</h1>
      <p className='text-center w-10/12'>
        Welcome to APPNAME, where finding the perfect credit card is effortless. Take our quick quiz, to match your financial needs and goals in
        seconds.
      </p>
      <button className='relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#30df36] before:to-[#82ff86] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0'>
        Start Quiz!
      </button>
    </div>
  )
}

export default page
