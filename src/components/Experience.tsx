import React from 'react'
import ResumeContentAnimationWrapper from './animationParentsAndComponents/ResumeContentAnimationWrapper'
import ResumeContentHeader from './subComponents/ResumeContentHeader'
import ExperienceContentContainer from './subComponents/ExperienceContentContainer';

const experiences = [
  {
    company: 'Ogilvy & Mather',
    role: 'Senior Art Director',
    joiningYear: 'Jan 2020',
    endYear: 'Present',
    description: "Managed a team of designers, copywriters, and photographers to deliver projects under tight deadlines. Led the redesign of Coca-Cola's digital assets, improving usability and aesthetic consistency."
  },
  {
    company: 'Google',
    role: 'Product Manager',
    joiningYear: 'Feb 2018',
    endYear: 'Dec 2019',
    description: "Oversaw the development of new features for Google Maps. Coordinated with cross-functional teams to ensure timely delivery of product updates. Conducted user research to inform product decisions."
  },
  {
    company: 'Microsoft',
    role: 'Software Engineer',
    joiningYear: 'Jun 2015',
    endYear: 'Jan 2018',
    description: "Developed and maintained features for Microsoft Office. Collaborated with designers and product managers to create user-friendly interfaces. Implemented performance improvements that reduced load times by 20%."
  }
];

export default function Experience() {
  return (
     <ResumeContentAnimationWrapper>
      <ResumeContentHeader title='Experience'/>
      <div className='flex flex-col gap-6'>
        { experiences.map((item, index) => (
          <ExperienceContentContainer 
            key={index} 
            company={item.company} 
            role={item.role} 
            joiningYear={item.joiningYear} 
            endYear={item.endYear} 
            description={item.description} 
          />
        )) }
      </div>
    </ResumeContentAnimationWrapper>
  )
}
