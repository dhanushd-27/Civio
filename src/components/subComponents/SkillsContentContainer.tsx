import React from 'react'

interface Props {
  title: string,
  description: string
}

export default function SkillsContentContainer({ title, description }: Props) {
  return (
    <p className='bodyS'><span className='font-bold'>{ title } </span>| { description }</p>
  )
}
