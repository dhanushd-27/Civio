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
    <div className='flex items-center justify-start gap-2.5 w-max-[500px]'>
      <div className='sm:w-[200px] sm:h-[170px] w-full h-[170px]'>
        <Image src={ imageSrc } alt={ altName } />
      </div>
      <div className='flex flex-col gap-2.5 text-start'>
        <h4>{ projectTitle }</h4>
        <p className='bodyS'>{ description }</p>
      </div>
    </div>
  )
}
