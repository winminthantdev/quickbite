import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Title = ({title, clickSeeAll}) => {

  return (
    <div className="flex justify-between my-4 md:my-8">
      <div className="flex flex-col w-max">
        <p className="text-3xl font-medium">{title}</p>
        <div className="w-20 h-1 bg-primary rounded-full mt-2"></div>
      </div>
      {clickSeeAll && (
        <div className="flex items-center cursor-pointer select-none gap-2" onClick={clickSeeAll}>
          <p>See all</p>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </div>
      )}
    </div>
  )
}

export default Title
