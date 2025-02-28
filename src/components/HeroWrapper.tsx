import Image from 'next/image'
import React from 'react'
import Profile from '@/assets/Profile.jpeg'

export default function HeroWrapper() {
  return (
    <div className='bg-green h-screen w-screen px-6 py-[45px] flex flex-col items-center justify-center gap-[45px] sticky top-0 -z-10'>
      <h1>Jordan Reese</h1>
      <Image src={ Profile } alt='profile-jpeg' className='w-[294px] h-[380px] md:h-[48vh]'/>
      <h2 className='max-w-[400px]'>Senior Art Director and Graphic Designer</h2>
    </div>
  )
}
