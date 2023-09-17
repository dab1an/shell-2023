/* eslint-disable @next/next/no-img-element */
import React from 'react'
import cardInfo from '../catalogue/cardInfo'
import TheButton from './TheButton'
interface resultCardProps {
  dataName: string
  dataDesc: string
  main?: boolean
}

const ResultCard = (props: resultCardProps) => {
  let cardImg = ''
  cardInfo.forEach(card => {
    if (card.name.startsWith(props.dataName)) {
      cardImg = card.url
    }
  })

  return (
    <div
      className={`relative flex w-80 flex-col ${
        props.main && 'shadow-2xl'
      } items-center rounded-xl border-2 border-neutral-700 bg-white bg-clip-border text-gray-700 shadow-md mt-16 ${
        props.main ? 'mb-16' : 'justify-end'
      }`}
    >
      <div className='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 border border-gray-500'>
        {cardImg && <img src={cardImg} alt='' className='w-full h-full' />}
      </div>
      <div className='p-6'>
        <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased min-h-[60px]'>
          {props.dataName}
        </h5>
        <p className='block font-sans font-light leading-relaxed text-inherit antialiased text-sm'>{props.dataDesc}</p>
      </div>
      <div className='p-6 pt-0'>
        <TheButton>See More</TheButton>
      </div>
    </div>
  )
}

export default ResultCard
