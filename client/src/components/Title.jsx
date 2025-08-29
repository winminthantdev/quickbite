import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Title = ({title, haveButton}) => {
  return (
    <div className="flex justify-between my-4 md:my-8">
      <div className="flex flex-col items-center w-max">
        <p className="text-3xl font-medium">{title}</p>
        <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
      </div>
      {
        haveButton && <button type="button" className="group cursor-pointer px-4">See All <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='text-slate-500 group-hover:text-black' /></button>
      }
    </div>
  )
}

export default Title
