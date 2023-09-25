import React from 'react'

interface BarProps {
  cant: number;
  description: string;
}

export default function Bar({cant, description}: BarProps) {
  return (
    <div className='flex w-[100%] h-[66px] bg-white shadow-lg rounded-lg'>
        <p className='flex ml-4 items-center font-Monserrat'>{description} ({cant})</p>
    </div>
  )
}
