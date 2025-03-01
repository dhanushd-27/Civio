import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  imageSrc: StaticImageData,
  altName: string,
  projectTitle: string,
  description: string
}

export default function ProjectContent({ imageSrc, altName, projectTitle, description }: Props) {
  return (
    <div className='sm:flex-row sm:items-center flex flex-col gap-2.5 max-w-[500px]'>
      <div className='sm:w-[200px] sm:h-[170px] w-full h-[170px] relative rounded-[9px]'>
        <Image src={ imageSrc } alt={ altName } fill className='object-cover rounded-[9px]'/>
      </div>
      <div className='flex flex-col gap-2.5 text-start max-w-[500px] sm:max-w-[290px]'>
        <h4>{ projectTitle }</h4>
        <p className='bodyS'>{ description }</p>
      </div>
    </div>
  )
}
