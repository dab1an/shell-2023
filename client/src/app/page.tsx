import Image from 'next/image'
import Link from 'next/link'
import { FaRegCreditCard } from 'react-icons/Fa'
import { BsRobot } from 'react-icons/bs'
import { HiOutlineClipboardList } from 'react-icons/hi'
import image1 from '../public/Roblox.png'
import Header from './_components/Header'
import TheButton from './_components/TheButton'
import ThreeCards from './_components/ThreeCards'

export default function Home() {
  return (
    <main className='flex flex-col w-full bg-green-500 items-center'>
      <div className='flex items-center justify-between w-10/12 py-28 relative'>
        <div className='w-6/12'>
          <h1 className='text-4xl pb-5 font-bold'>Let AI Find a Credit Card Tailored to Your Needs.</h1>
          <p className='text-xl mb-4 '>Your financial future awaits. And AI can take you there!</p>
          <Link href='/quiz'>
            <TheButton secondary>Go to Quiz</TheButton>
          </Link>
        </div>

        <div className='w-6/12'>
          <img src='/ThreeCards.png' alt='' />
        </div>
      </div>
      <div className='bg-neutral-200 w-full flex justify-center pb-6'>
        <div className='w-10/12 flex flex-col justify-center'>
          <div className='mt-16'>
            <h1 className='text-3xl text-center mb-4 font-bold'> The Process </h1>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-center'>
              <HiOutlineClipboardList size={50} />
              <h1 className='font-bold text-lg'>Complete the Quiz</h1>
              <p className='text-center'>Taking the quiz is the initial and swift step in determining the ideal credit card for a student.</p>
            </div>

            <div className='flex flex-col items-center'>
              <BsRobot size={50} />
              <h1 className='font-bold text-lg'> AI Calculates Results </h1>
              <p className='text-center'>AI rapidly processes the data to swiftly match students with their ideal credit card.</p>
            </div>

            <div className='flex flex-col items-center'>
              <FaRegCreditCard size={50} />
              <h1 className='font-bold text-lg'> Card Delivered </h1>
              <p className='text-center'>After AI calculates the quiz results, users receive their recommended credit card offer.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
