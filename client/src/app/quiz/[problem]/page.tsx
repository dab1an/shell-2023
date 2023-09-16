import React from 'react'

const Page = ({ params }: any) => {
  return (
    <div>
      <h1>{params.problem}</h1>
    </div>
  )
}

export default Page
