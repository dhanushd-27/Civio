'use client'

import { motion } from 'motion/react'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const varients = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }
}

export default function ResumeContentAnimationWrapper({ children }: Props) {
  return (
    <motion.div className='max-w-[500px] flex flex-col gap-6 relative'
      variants={ varients }
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
    >
      { children }
    </motion.div>
  )
}
