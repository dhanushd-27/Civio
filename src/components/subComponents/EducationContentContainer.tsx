import React from 'react'

interface Props {
  title: string,
  description: string,
  status: string
}

export default function EducationContentContainer({ title, description, status }: Props) {
  return (
    <div className='flex flex-col gap-[9px] max-w-[500px] mini:w-[500px]'>
      <h4>{ title }</h4>
      <p className='bodySMedium'>{ description } | { status }</p>
    </div>
  )
}
