import Image from 'next/image'
import Header from './_components/Header'
import image1 from '../public/Roblox.png'
import Link from 'next/link'
export default function Home() {
  return (
    <main className=''>
      <div className='w-full flex items-center align-center flex-col pt-10 pb-10'>
        <h1 className='text-6xl'> <b> Don't settle for any credit card </b> </h1>
        <h1 className='text-5xl'> <b> Find the right one! </b></h1> 
      </div>
      
      
      <div className='flex space-x-10 px-3 flex items-center align-center'>
        <div className=' p-11 bg-blue-500 '>
          <h1 className='text-4xl mb-4'> Unlock your financial potential as a student by taking our quick quiz and discover the perfect credit card tailored to your needs.</h1> 
        
          <p className='text-xl mb-4'> Your financial future awaits. Begin your journey to the right student credit card today! </p>
          <Link className="bg-red-500 " href="/quiz"> go to Quiz </Link>
        </div>
        
        <img src="/screenshot1.png" alt="something else idk" style={{ width: '600px', height: '300px', borderRadius: "20px"}}/> 
      </div>


      <div className='flex space-x-10 px-3 flex items-center align-center pt-10'>
        <div className=' p-11'>
          <h1 className='text-4xl mb-4'> Unlock your financial potential as a student by taking our quick quiz and discover the perfect credit card tailored to your needs.</h1> 
        
          <p className='text-xl mb-4'> Your financial future awaits. Begin your journey to the right student credit card today! </p>
          <Link className="bg-red-500 " href="/quiz"> go to About </Link>
        </div>
        
        <img src="/Roblox.png" alt="something else idk" style={{ width: '600px', height: '300px', borderRadius:"20px"}}/> 
      </div>

      

    </main>
  )
}
