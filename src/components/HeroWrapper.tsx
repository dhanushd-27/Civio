"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Profile from '@/assets/Profile.jpeg'
import { motion } from 'motion/react'
import { timeoutPromisified } from '@/tools/timeoutPromisified'

const StaggerAnimation = (index: number) => ({
    initial: {
      x:-10,
      opacity: 0,
      filter: "blur(10px)",
      top: 20
    },
    animate: {
      top:0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.03 * index
      },
      filter: "blur(0px)"
    }
})

export default function HeroWrapper() {
  const items = ["Jordan", " ", "Reese"]
  const h2Items = ["Senior", " ", "Art", " ", "Director", " ", "and", " ", "Graphic", " ", "Designer"]

  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);

  return (
    <div className='bg-green h-screen w-screen px-6 py-[45px] flex flex-col items-center justify-center gap-[45px] sticky top-0 -z-10'>
      <div
      >{
        items.map((text, index) => (
          <motion.h1 
            key={ index }
            custom={ index }
            variants={ StaggerAnimation(index) }
            initial="initial"
            animate="animate"
            className='inline relative'
            onAnimationComplete={ () => { timeoutPromisified.then(() => { setFirstAnimationComplete(true) }) } }
          >
            { text }
          </motion.h1>
        ))
      }
      </div>
      <Image src={ Profile } alt='profile-jpeg' className='w-[294px] h-[380px] md:h-[48vh]'/>
      <div className='w-[400px] h-[86.5px] text-center' >
        { firstAnimationComplete &&
          (h2Items.map((item, index) => (
            <motion.h2 className='relative inline'
            key={ index }
            variants={ StaggerAnimation(index) }
            initial="initial"
            animate="animate"
          >
            { item }
          </motion.h2>
          )))
        }
      </div>
    </div>
  )
}
