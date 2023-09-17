"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
const Header = () => {
  return (
    <div className=' py-5 top-5 bg-[#7ad87d]  px-5 flex w-full justify-between  items-center z-10 backdrop-filter backdrop-blur bg-opacity-80'>
      <Link className='flex items-center gap-1 text-xl' href={'/'}>
        <h2 className='text-2xl hover:text-white'>CreditCardApp</h2>
      </Link>
      
      <div className='gap-5 hidden laptop:flex'>
        <button>Button</button>
        <button>Button</button>
      </div>
      <div>

        <ul className='flex space-x-16'>
          <li> 
            
          </li> 

          <li> 
            <div className='hover:text-white hover:text-lg transition'>
              <h1> About</h1>
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
