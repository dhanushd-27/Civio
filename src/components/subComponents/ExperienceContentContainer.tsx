import React from 'react'

interface Props {
  company: string,
  role: string,
  joiningYear: string,
  endYear: string,
  description: string
}

export default function ExperienceContentContainer({ company, role, joiningYear, endYear, description }: Props) {
  return (
    <div className='text-start flex flex-col gap-2 max-w-[500px]'>
      <h4>{ company }</h4>
      <p className='bodySMedium'>{ role } | { joiningYear } - { endYear }</p>
      <p className='bodyS'>{ description }</p>
    </div>
  )
}
