import React from 'react'
import ResumeContentAnimationWrapper from './animationParentsAndComponents/ResumeContentAnimationWrapper';
import ResumeContentHeader from './subComponents/ResumeContentHeader';
import ProjectContent from './subComponents/ProjectContent';
import AccoCampaign from "@/assets/DesktopProject1.jpeg";
import LunaDirection from "@/assets/Project2.jpeg";

const projects = [
  {
    imageSrc: AccoCampaign,
    projectTitle: 'Acco Campaign',
    description: 'Revamped Acco’s brand with a bold, engaging campaign for global impact.',
    altName: 'Acco Campaign Image'
  },
  {
    imageSrc: LunaDirection,
    projectTitle: 'Luna Direction',
    description: "Crafted Luna's creative direction to elevate brand identity",
    altName: 'Luna Direction Image'
  }
];

export default function Projects() {
  return (
    <ResumeContentAnimationWrapper>
      <ResumeContentHeader title='Featured Projects'/>
      <div>
        { projects.map((project, index) => (
          <ProjectContent key={ index } imageSrc={ project.imageSrc } projectTitle={ project.projectTitle } description={ project.description } altName={ project.altName }/>
        ))}
      </div>
    </ResumeContentAnimationWrapper>
  )
}
