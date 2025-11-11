import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AllProducts from '@/features/user/pages/AllProducts'
import { useNavigate } from 'react-router'

const Title = ({title}) => {

  return (
    <div className="flex justify-between my-4 md:my-8">
      <div className="flex flex-col items-center w-max">
        <p className="text-3xl font-medium">{title}</p>
        <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
      </div>
    </div>
  )
}

export default Title
