"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Header = () => {
  return (
    <div className=" py-5 top-5 bg-[#7ad87d]  px-8 flex w-full justify-between  items-center z-10 backdrop-filter backdrop-blur bg-opacity-80">

      <Link className="flex items-center gap-1 text-xl" href={"/"}>
        <h2 className="text-2xl font-bold hover:text-white transition duration-200 ease-in-out ">CreditCardApp</h2>
      </Link>

      <div className="gap-5 hidden laptop:flex">
        <button>Button</button>
        <button>Button</button>
      </div>

      <div className=" flex space-x-8">
        <div className=" text-xl font-bold hover:text-white transition duration-200 ease-in-out ">
            <Link href="/quiz"> Quiz</Link>
        </div>
            
        <div className=" text-xl font-bold hover:text-white transition duration-200 ease-in-out">
            <Link href="/Trivia"> Trivia</Link>
        </div>

        <div className=" text-xl font-bold hover:text-white transition duration-200 ease-in-out">
            <Link href="/Catalog"> Catalog</Link>
        </div>

        <div className=" text-xl font-bold hover:text-white transition duration-200 ease-in-out">
            <Link href="/About"> About</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
