'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
const Header = () => {
  return (
    <div className='sticky py-5 top-5 bg-violet-500 rounded-lg px-5 flex w-10/12 justify-between mt-5 items-center z-10 backdrop-filter backdrop-blur bg-opacity-80'>
      <Link className='flex items-center gap-1 text-xl' href={'/'}>
        <h2 className='text-2xl'>CreditCardApp</h2>
      </Link>
      <div className='gap-5 hidden laptop:flex'>
        <button>Button</button>
        <button>Button</button>
      </div>
      <div className='laptop:hidden'>
        <HiMenu size={30} />
      </div>
    </div>
  )
}

export default Header
