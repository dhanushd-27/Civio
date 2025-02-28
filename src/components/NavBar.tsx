import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/Logo.svg'

export default function NavBar() {
  return (
    <div className='bg-green py-6 px-4'>
      <Image src={ Logo } alt='logo-svg' height={ 20 } width={ 20 } />
    </div>
  )
}
