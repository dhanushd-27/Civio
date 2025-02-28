import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/Logo.svg'

export default function NavBar() {
  return (
    <div className='bg-green py-[15px] px-6 fixed w-full z-50'>
      <Image src={ Logo } alt='logo-svg' height={ 20 } width={ 20 } />
    </div>
  )
}
