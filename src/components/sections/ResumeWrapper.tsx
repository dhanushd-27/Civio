'use client'
import React from 'react'
import About from '../About'

export default function ResumeWrapper() {
  return (
    <div className='w-screen h-full bg-light z-10
      px-6 py-[60px] flex flex-col justify-center items-center gap-70
    '
    >
      <About />
    </div>
  )
}
