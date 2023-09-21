import React from 'react'
import ResultCard from '../_components/ResultCard'
import cardInfo from './cardInfo'
const page = () => {
  return (
    <div className='bg-neutral-100 flex items-center pt-3'>
      <div className='flex flex-col'>
        <div className='ml-7'>
          <h1 className='font-bold text-3xl'>Catalogue</h1>
          <p>Explore cards that you might be interested in</p>
        </div>
        <div className='flex flex-wrap gap-5 justify-center p-4'>
          {cardInfo.map((e, i) => {
            return <ResultCard key={i} dataName={e.name} dataDesc={e.dsc} main={false} />
          })}
        </div>
      </div>
    </div>
  )
}

export default page
