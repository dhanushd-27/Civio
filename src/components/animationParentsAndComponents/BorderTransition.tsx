'use client'

import { motion } from 'motion/react'
import React from 'react'

export default function BorderTransition() {
  return (
      <motion.div className='bg-green-border h-0.5'
      initial={{
        width: 0,
      }}
      whileInView={{
        width: "100%"
      }}
      transition={{
        delay: 0.5,
        duration: 2,
        ease: 'easeInOut'
      }}
      viewport={{
        once: true
      }}
    ></motion.div>
  )
}
