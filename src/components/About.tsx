import React from 'react'
import ResumeContentAnimationWrapper from './animationParentsAndComponents/ResumeContentAnimationWrapper'
import BorderTransition from './animationParentsAndComponents/BorderTransition'

export default function About() {

  return (
    <ResumeContentAnimationWrapper>
      <div className='flex flex-col gap-[10px]'
      >
        <h3>About</h3>
        <div className='h-0.5'>
          <BorderTransition />
        </div>
      </div>
      <p className='bodyS'>
        Jordan is an accomplished Art Director and Graphic Designer with a keen eye for visual storytelling and a passion for creating impactful, innovative, and memorable designs. With extensive experience leading creative projects across branding, digital, and print media, Jordan thrives on crafting engaging designs that connect with audiences and deliver results.
      </p>
    </ResumeContentAnimationWrapper>
  )
}
