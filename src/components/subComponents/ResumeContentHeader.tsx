import React from 'react'
import BorderTransition from '../animationParentsAndComponents/BorderTransition'

interface Props {
  title: string
}

export default function ResumeContentHeader({ title }: Props) {
  return (
    <div className='flex flex-col gap-[10px]'
    >
      <h3>{ title }</h3>
      <div className='h-0.5'>
        <BorderTransition />
      </div>
    </div>
  )
}
