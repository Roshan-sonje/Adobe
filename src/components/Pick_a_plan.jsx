import React from 'react'
import Individual from './Plans/Individual'

const array = ["Individuals","Students and teachers","Business"]

const Pick_a_plan = () => {
  return (
    <>
    <div>
        <h1 className='text-[25px] font-semibold text-center'>Pick a plan to start creating.</h1>
        <p className='text-[17px] text-center px-2 my-4'>Start with just one app, get the photography essentials or save big with Creative Cloud All Apps.</p>
    </div>
    {/* <div className='flex gap-[10px] overflow-x-scroll'>
    {array.map((items,i) => (
            <p key={i} className=''>{items}</p>
        ))}
    </div> */}
    <Individual/>
    </>
  )
}

export default Pick_a_plan