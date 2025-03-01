import React from 'react'
import ResumeContentAnimationWrapper from './animationParentsAndComponents/ResumeContentAnimationWrapper'
import ResumeContentHeader from './subComponents/ResumeContentHeader'
import SkillsContentContainer from './subComponents/SkillsContentContainer';

const skills = [
  { title: 'Branding & Identity', description: 'Logo design, typography, packaging, and style guides.' },
  { title: 'UI/UX Design', description: 'Wireframing, prototyping, user research, and responsive web design.' },
  { title: 'Project Management', description: 'Team leadership, client relations, and deadline management.' }
];

export default function Skills() {
  return (
    <ResumeContentAnimationWrapper>
      <ResumeContentHeader title='Skills'/>
      <div className='flex flex-col gap-6'>
        { skills.map((item, index) => (
          <SkillsContentContainer key={ index } title={ item.title } description={ item.description }/>
        ))}
      </div>
    </ResumeContentAnimationWrapper>
  )
}
