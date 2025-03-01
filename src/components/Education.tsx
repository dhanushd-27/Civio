import React from 'react'
import ResumeContentAnimationWrapper from './animationParentsAndComponents/ResumeContentAnimationWrapper'
import ResumeContentHeader from './subComponents/ResumeContentHeader'
import EducationContentContainer from './subComponents/EducationContentContainer';

const educationContent = [
  {
    title: 'Bachelor of Fine Arts in Graphic Design',
    description: 'Rhode Island School of Design (RISD) ',
    status: 'Graduated: May 2015'
  },
  {
    title: 'Certificate in Ul/UX Design',
    description: 'General Assembly, New York',
    status: 'Completed: Dec 2017'
  },
];

export default function Education() {
  return (
    <ResumeContentAnimationWrapper>
      <ResumeContentHeader title='Education'/>
      <div className='flex flex-col gap-6'>
        { educationContent.map((item, index) => (
          <EducationContentContainer key={ index } title={ item.title } description={ item.description } status={ item.status }/>
        )) }
      </div>
    </ResumeContentAnimationWrapper>
  )
}
