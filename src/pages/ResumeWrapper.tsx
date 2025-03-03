'use client'
import React from 'react'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import ResumeButton from '@/components/ResumeButton'

export default function ResumeWrapper() {
  return (
    <div className='w-screen h-full bg-light z-10
      px-6 py-[60px] flex flex-col justify-center items-center gap-[70px]
    '
    >
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <ResumeButton />
    </div>
  )
}
