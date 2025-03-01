import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-green overflow-hidden py-[60px] px-6 flex flex-col items-center justify-center'>
      <div className='flex flex-col justify-center items-center pb-[60px] gap-8'>
        <div className='flex flex-col w-full h-max gap-3'>
          <p className='label'>Location</p>
          <p className='bodyL'>Bengaluru</p>
        </div>
        <div className='flex flex-col w-full h-max gap-3'>
          <p className='label'>Contact Details</p>
          <p className='bodyL'>dhanushd.work@gmail.com</p>
        </div>
      </div>
      <div className='w-full flex flex-col-reverse gap-[30px] items-center mini:flex-row mini:justify-between'>
        <p className='bodyS text-light uppercase'>© 2025 studio kismo</p>
          <Link href={"https://x.com/orca_x27"} target='_blank' className='bodyS text-light uppercase hover:text-light/80 hover:duration-300'>Twitter</Link>
          <Link href={"https://github.com/dhanushd-27"} target="_blank" className='bodyS text-light uppercase hover:text-light/80 hover:duration-300'>Github</Link>
        <Link href={"https://www.framer.com/@studio-kismo/"} className='bodyS text-light uppercase hover:text-light/80 hover:duration-300'>Template</Link>
      </div>
    </div>
  )
}
