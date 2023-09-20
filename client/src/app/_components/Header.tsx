/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const Header = () => {
  return (
    <div className='sticky py-5 top-0 bg-[#e6e6e657] flex w-full justify-center items-center z-10 backdrop-filter backdrop-blur bg-opacity-80 '>
      <div className='w-10/12 flex justify-between items-center'>
        <Link className='flex items-center gap-1 text-xl' href={'/'}>
          <img src={'/CreditWise.png'} alt='' className='w-12' />
          <h2 className='text-2xl font-bold transition duration-200 ease-in-out pb-[2px]'>CardWise.ai</h2>
        </Link>
        <div className=' flex gap-8'>
          <div className=' text-lg font-bold'>
            <Link href='/quiz'>Quiz</Link>
          </div>
          <div className=' text-lg font-bold'>
            <Link href='/catalogue'>Catalogue</Link>
          </div>
          <div className=' text-lg font-bold'>
            <Link href='/about'>About</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
