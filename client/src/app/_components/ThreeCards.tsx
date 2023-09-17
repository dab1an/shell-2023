/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ThreeCards = () => {
  return (
    <div className='relative bg-red-700'>
      <img src='/card3.svg' alt='' className='absolute w-1/2 top-4' />
      <img src='/card5.svg' alt='' className='absolute w-1/2 bottom-1' />
      <img src='/card7.svg' alt='' className='absolute w-1/2 left-3' />
    </div>
  )
}

export default ThreeCards
