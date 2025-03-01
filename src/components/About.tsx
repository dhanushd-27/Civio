import React from 'react'
import ResumeContentAnimationWrapper from './animationParentsAndComponents/ResumeContentAnimationWrapper'
import ResumeContentHeader from './subComponents/ResumeContentHeader'

export default function About() {

  return (
    <ResumeContentAnimationWrapper>
      <ResumeContentHeader title='About' />
      <p className='bodyS'>
        Jordan is an accomplished Art Director and Graphic Designer with a keen eye for visual storytelling and a passion for creating impactful, innovative, and memorable designs. With extensive experience leading creative projects across branding, digital, and print media, Jordan thrives on crafting engaging designs that connect with audiences and deliver results.
      </p>
    </ResumeContentAnimationWrapper>
  )
}
